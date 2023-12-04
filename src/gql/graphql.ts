/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Cell = {
  __typename?: 'Cell';
  blockHash?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['String']['output']>;
  cellOutput: CellOutput;
  data: Scalars['String']['output'];
  outPoint?: Maybe<OutPoint>;
  txIndex?: Maybe<Scalars['String']['output']>;
};

export type CellOutput = {
  __typename?: 'CellOutput';
  capacity: Scalars['String']['output'];
  lock: Script;
  type?: Maybe<Script>;
};

export type Cluster = {
  __typename?: 'Cluster';
  capacityMargin?: Maybe<Scalars['String']['output']>;
  cell?: Maybe<Cell>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  spores?: Maybe<Array<Spore>>;
};


export type ClusterSporesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SporeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QueryOrder>;
};

export type ClusterFilterInput = {
  addresses?: InputMaybe<Array<Scalars['String']['input']>>;
  mintableBy?: InputMaybe<Scalars['String']['input']>;
};

export enum HashType {
  Data = 'data',
  Data1 = 'data1',
  Type = 'type'
}

export type OutPoint = {
  __typename?: 'OutPoint';
  index: Scalars['String']['output'];
  txHash: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cluster?: Maybe<Cluster>;
  clusterCount: Scalars['Int']['output'];
  clusters?: Maybe<Array<Cluster>>;
  mintableClusters?: Maybe<Array<Cluster>>;
  spore?: Maybe<Spore>;
  sporeCount: Scalars['Int']['output'];
  spores?: Maybe<Array<Spore>>;
  topClusters?: Maybe<Array<Cluster>>;
};


export type QueryClusterArgs = {
  id: Scalars['String']['input'];
};


export type QueryClustersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ClusterFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QueryOrder>;
};


export type QueryMintableClustersArgs = {
  address: Scalars['String']['input'];
};


export type QuerySporeArgs = {
  id: Scalars['String']['input'];
};


export type QuerySporeCountArgs = {
  filter?: InputMaybe<SporeFilterInput>;
};


export type QuerySporesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SporeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<QueryOrder>;
};


export type QueryTopClustersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TopClusterFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export enum QueryOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Script = {
  __typename?: 'Script';
  args: Scalars['String']['output'];
  codeHash: Scalars['String']['output'];
  hashType: HashType;
};

export type Spore = {
  __typename?: 'Spore';
  capacityMargin?: Maybe<Scalars['String']['output']>;
  cell?: Maybe<Cell>;
  cluster?: Maybe<Cluster>;
  clusterId?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  contentType: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type SporeFilterInput = {
  addresses?: InputMaybe<Array<Scalars['String']['input']>>;
  clusterIds?: InputMaybe<Array<Scalars['String']['input']>>;
  contentTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TopClusterFilterInput = {
  mintableBy?: InputMaybe<Scalars['String']['input']>;
};

export type GetClusterQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
  contentTypes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetClusterQueryQuery = { __typename?: 'Query', cluster?: { __typename?: 'Cluster', id: string, name: string, description: string, capacityMargin?: string | null, spores?: Array<{ __typename?: 'Spore', id: string, clusterId?: string | null, contentType: string }> | null, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null } | null };

export type GetClusterSporesQueryQueryVariables = Exact<{
  clusterId: Scalars['String']['input'];
  contentTypes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetClusterSporesQueryQuery = { __typename?: 'Query', spores?: Array<{ __typename?: 'Spore', id: string, contentType: string, capacityMargin?: string | null, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null }> | null };

export type GetClustersByAddressQueryVariables = Exact<{
  address: Scalars['String']['input'];
  contentTypes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetClustersByAddressQuery = { __typename?: 'Query', clusters?: Array<{ __typename?: 'Cluster', id: string, name: string, description: string, capacityMargin?: string | null, spores?: Array<{ __typename?: 'Spore', id: string, clusterId?: string | null, contentType: string }> | null, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null }> | null };

export type GetInfiniteClustersQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  contentTypes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  mintableBy?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetInfiniteClustersQueryQuery = { __typename?: 'Query', clusters?: Array<{ __typename?: 'Cluster', id: string, name: string, description: string, capacityMargin?: string | null, spores?: Array<{ __typename?: 'Spore', id: string, clusterId?: string | null, contentType: string }> | null, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null }> | null };

export type GetInfiniteSporesQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  contentTypes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetInfiniteSporesQueryQuery = { __typename?: 'Query', spores?: Array<{ __typename?: 'Spore', id: string, contentType: string, capacityMargin?: string | null, cluster?: { __typename?: 'Cluster', id: string, name: string, description: string } | null, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null }> | null };

export type GetMintableClusterQueryQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type GetMintableClusterQueryQuery = { __typename?: 'Query', clusters?: Array<{ __typename?: 'Cluster', id: string, name: string, description: string, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null }> | null };

export type GetSporeQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetSporeQueryQuery = { __typename?: 'Query', spore?: { __typename?: 'Spore', id: string, contentType: string, capacityMargin?: string | null, cluster?: { __typename?: 'Cluster', id: string, name: string, description: string } | null, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null } | null };

export type GetSporesByAddressQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type GetSporesByAddressQuery = { __typename?: 'Query', spores?: Array<{ __typename?: 'Spore', id: string, contentType: string, capacityMargin?: string | null, cluster?: { __typename?: 'Cluster', id: string, name: string, description: string } | null, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null }> | null };

export type GetTopClustersQueryQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  contentTypes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetTopClustersQueryQuery = { __typename?: 'Query', topClusters?: Array<{ __typename?: 'Cluster', id: string, name: string, description: string, capacityMargin?: string | null, spores?: Array<{ __typename?: 'Spore', id: string, clusterId?: string | null, contentType: string }> | null, cell?: { __typename?: 'Cell', cellOutput: { __typename?: 'CellOutput', capacity: string, lock: { __typename?: 'Script', args: string, codeHash: string, hashType: HashType } }, outPoint?: { __typename?: 'OutPoint', txHash: string, index: string } | null } | null }> | null };


export const GetClusterQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClusterQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cluster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"capacityMargin"}},{"kind":"Field","name":{"kind":"Name","value":"spores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contentTypes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clusterId"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClusterQueryQuery, GetClusterQueryQueryVariables>;
export const GetClusterSporesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClusterSporesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clusterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"clusterIds"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"clusterId"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"contentTypes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"capacityMargin"}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClusterSporesQueryQuery, GetClusterSporesQueryQueryVariables>;
export const GetClustersByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClustersByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clusters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"addresses"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"address"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"capacityMargin"}},{"kind":"Field","name":{"kind":"Name","value":"spores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contentTypes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clusterId"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClustersByAddressQuery, GetClustersByAddressQueryVariables>;
export const GetInfiniteClustersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInfiniteClustersQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mintableBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"clusters"},"name":{"kind":"Name","value":"topClusters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mintableBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mintableBy"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"capacityMargin"}},{"kind":"Field","name":{"kind":"Name","value":"spores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contentTypes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clusterId"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetInfiniteClustersQueryQuery, GetInfiniteClustersQueryQueryVariables>;
export const GetInfiniteSporesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInfiniteSporesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contentTypes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"capacityMargin"}},{"kind":"Field","name":{"kind":"Name","value":"cluster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetInfiniteSporesQueryQuery, GetInfiniteSporesQueryQueryVariables>;
export const GetMintableClusterQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMintableClusterQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"clusters"},"name":{"kind":"Name","value":"mintableClusters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMintableClusterQueryQuery, GetMintableClusterQueryQueryVariables>;
export const GetSporeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSporeQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spore"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"capacityMargin"}},{"kind":"Field","name":{"kind":"Name","value":"cluster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSporeQueryQuery, GetSporeQueryQueryVariables>;
export const GetSporesByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSporesByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"spores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"addresses"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"address"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"capacityMargin"}},{"kind":"Field","name":{"kind":"Name","value":"cluster"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSporesByAddressQuery, GetSporesByAddressQueryVariables>;
export const GetTopClustersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopClustersQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topClusters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"capacityMargin"}},{"kind":"Field","name":{"kind":"Name","value":"spores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contentTypes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentTypes"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clusterId"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cell"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellOutput"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"lock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"args"}},{"kind":"Field","name":{"kind":"Name","value":"codeHash"}},{"kind":"Field","name":{"kind":"Name","value":"hashType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"outPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTopClustersQueryQuery, GetTopClustersQueryQueryVariables>;