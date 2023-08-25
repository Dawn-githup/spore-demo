import { useCallback, useEffect } from 'react';
import { useDisclosure, useId } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useConnect } from '../useConnect';
import CreateClusterModal from '@/components/CreateClusterModal';
import { createCluster, predefinedSporeConfigs } from '@spore-sdk/core';
import { sendTransaction } from '@/utils/transaction';
import { useMutation } from 'react-query';
import { trpc } from '@/server';

export default function useCreateClusterModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const { address, lock, getAnyoneCanPayLock, signTransaction } = useConnect();
  const modalId = useId();

  const { refetch } = trpc.cluster.list.useQuery(undefined, { enabled: false });

  const addCluster = useCallback(
    async (...args: Parameters<typeof createCluster>) => {
      const { txSkeleton } = await createCluster(...args);
      const signedTx = await signTransaction(txSkeleton);
      const hash = await sendTransaction(signedTx);
      return hash;
    },
    [signTransaction],
  );

  const addClusterMutation = useMutation(addCluster, {
    onSuccess: () => refetch(),
  });
  const loading = addClusterMutation.isLoading && !addClusterMutation.isError;

  const handleSubmit = useCallback(
    async (values: { name: string; description: string; public: string }) => {
      if (!address || !lock) {
        return;
      }

      const toLock = values.public === '1' ? getAnyoneCanPayLock() : lock;
      await addClusterMutation.mutateAsync({
        data: {
          name: values.name,
          description: values.description,
        },
        fromInfos: [address],
        toLock,
        config: predefinedSporeConfigs.Aggron4,
      });

      notifications.show({
        color: 'green',
        title: 'Congratulations!',
        message: 'Your cluster has been created.',
      });
      modals.close(modalId);
    },
    [address, lock, getAnyoneCanPayLock, addClusterMutation, modalId],
  );

  useEffect(() => {
    if (opened) {
      modals.open({
        modalId,
        title: 'Create New Cluster',
        onClose: close,
        styles: {
          content: {
            minWidth: '500px',
          },
        },
        closeOnEscape: !addClusterMutation.isLoading,
        closeOnClickOutside: !addClusterMutation.isLoading,
        withCloseButton: !addClusterMutation.isLoading,
        children: <CreateClusterModal onSubmit={handleSubmit} />,
      });
    } else {
      modals.close(modalId);
    }
  }, [modalId, addClusterMutation.isLoading, handleSubmit, opened, close]);

  return {
    open,
    close,
    loading,
  };
}
