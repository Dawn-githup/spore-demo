import { graphql } from '@/gql';
import request from 'graphql-request';
import { useQuery } from '@tanstack/react-query';

const topClustersQueryDocument = graphql(`
  query GetTopClustersQuery($first: Int) {
    topClusters(first: $first) {
      id
      name
      description
    }
  }
`);

export function useTopClustersQuery(limit = 4) {
  const { data, isLoading } = useQuery({
    queryKey: ['topClusters'],
    queryFn: async () =>
      request('/api/graphql', topClustersQueryDocument, { first: limit }),
  });
  const clusters = (data?.topClusters) ?? [];
  return {
    data: clusters,
    isLoading,
  };
}
