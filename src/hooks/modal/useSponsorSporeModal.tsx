import { predefinedSporeConfigs } from '@spore-sdk/core';
import { useCallback, useEffect, useRef } from 'react';
import { useDisclosure, useId, useMediaQuery } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { transferSpore as _transferSpore } from '@spore-sdk/core';
import { useConnect } from '../useConnect';
import { sendTransaction } from '@/utils/transaction';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showSuccess } from '@/utils/notifications';
import SponsorModal from '@/components/SponsorModal';
import { useMantineTheme } from '@mantine/core';
import { BI, OutPoint } from '@ckb-lumos/lumos';
import { useAtomValue } from 'jotai';
import { modalStackAtom } from '@/state/modal';
import { QuerySpore } from '../query/type';
import { useSporeQuery } from '../query/useSporeQuery';
import { update, cloneDeep } from 'lodash-es';

export default function useSponsorSporeModal(spore: QuerySpore | undefined) {
  const modalId = useId();
  const modalStack = useAtomValue(modalStackAtom);
  const [opened, { open, close }] = useDisclosure(false);
  const { address, lock, signTransaction } = useConnect();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { data: { capacityMargin } = {} } = useSporeQuery(spore?.id);
  const queryClient = useQueryClient();
  const { refresh: refreshSpore } = useSporeQuery(spore?.id);
  const nextCapacityMarginRef = useRef<string | undefined>();

  const sponsorSpore = useCallback(
    async (...args: Parameters<typeof _transferSpore>) => {
      const { txSkeleton, outputIndex } = await _transferSpore(...args);
      const signedTx = await signTransaction(txSkeleton);
      const txHash = await sendTransaction(signedTx);
      return {
        txHash,
        index: BI.from(outputIndex).toHexString(),
      } as OutPoint;
    },
    [signTransaction],
  );

  const onSuccess = useCallback(
    async (outPoint: OutPoint) => {
      if (!spore) return;
      const capacityMargin = nextCapacityMarginRef.current;
      const capacity = BI.from(spore?.cell?.cellOutput.capacity ?? 0)
        .add(BI.from(capacityMargin).sub(spore?.capacityMargin ?? 0))
        .toHexString();

      queryClient.setQueryData(
        ['spore', spore.id],
        (data: { spore: QuerySpore }) => {
          const { spore } = data;
          const newSpore = cloneDeep(spore);
          update(newSpore, 'capacityMargin', () => capacityMargin);
          update(newSpore, 'cell.cellOutput.capacity', () => capacity);
          update(newSpore, 'cell.outPoint', () => outPoint);
          return { spore: newSpore };
        },
      );
      await refreshSpore();
    },
    [queryClient, refreshSpore, spore],
  );

  const sponsorSporeMutation = useMutation({
    mutationFn: sponsorSpore,
    onSuccess,
  });
  const loading =
    sponsorSporeMutation.isPending && !sponsorSporeMutation.isError;

  const handleSubmit = useCallback(
    async (values: { amount: number }) => {
      if (!address || !values.amount || !spore?.cell) {
        return;
      }
      const { amount } = values;
      const nextCapacityMargin = BI.from(capacityMargin).add(
        BI.from(amount).mul(100_000_000),
      );
      nextCapacityMarginRef.current = nextCapacityMargin.toHexString();

      await sponsorSporeMutation.mutateAsync({
        outPoint: spore.cell!.outPoint!,
        fromInfos: [address],
        toLock: lock!,
        config: predefinedSporeConfigs.Aggron4,
        capacityMargin: nextCapacityMargin.toHexString(),
        useCapacityMarginAsFee: false,
      });
      showSuccess(`${amount.toLocaleString('en-US')} CKB sponsored to Spore!`);
      modals.close(modalId);
    },
    [address, spore, sponsorSporeMutation, modalId, lock, capacityMargin],
  );

  useEffect(() => {
    if (opened) {
      modals.open({
        modalId,
        title: 'Sponsor Spore',
        onClose: () => {
          close();
          const nextModal = modalStack.pop();
          if (nextModal) {
            nextModal.open();
          }
        },
        styles: {
          content: {
            minWidth: isMobile ? 'auto' : '560px',
          },
        },
        closeOnEscape: !sponsorSporeMutation.isPending,
        withCloseButton: !sponsorSporeMutation.isPending,
        closeOnClickOutside: !sponsorSporeMutation.isPending,
        children: (
          <SponsorModal type="spore" data={spore!} onSubmit={handleSubmit} />
        ),
      });
    } else {
      modals.close(modalId);
    }
  }, [
    isMobile,
    sponsorSporeMutation.isPending,
    handleSubmit,
    opened,
    close,
    modalId,
    spore,
    modalStack,
  ]);

  return {
    open,
    close,
    loading,
  };
}
