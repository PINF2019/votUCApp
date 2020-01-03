/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export type Candidate = {
   __typename?: 'Candidate',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  about?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
};

export type CandidateInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  about?: Maybe<Scalars['String']>,
};

export type Census = {
   __typename?: 'Census',
  id: Scalars['ID'],
  group: Scalars['String'],
  date: Scalars['DateTime'],
  location: Scalars['String'],
  voters: Array<Voter>,
};

export type CensusInput = {
  group: Scalars['String'],
  date: Scalars['DateTime'],
  location: Scalars['String'],
  file: Scalars['String'],
};


export type Election = {
   __typename?: 'Election',
  id: Scalars['ID'],
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  description: Scalars['String'],
  candidates: Array<Candidate>,
  results: Array<ElectionResults>,
  censuses: Array<Census>,
};

export type ElectionInput = {
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  description: Scalars['String'],
  censuses: Array<CensusInput>,
  candidates: Array<CandidateInput>,
};

export type ElectionResults = {
   __typename?: 'ElectionResults',
  id: Scalars['ID'],
  votes: Scalars['Int'],
  candidate: Candidate,
  group: Scalars['String'],
  location: Scalars['String'],
};

export type ElectoralProcess = Election | Poll;

export type File = {
   __typename?: 'File',
  name: Scalars['String'],
};

export type LoginInput = {
  uid: Scalars['String'],
  password: Scalars['String'],
};

export type LoginPayload = {
   __typename?: 'LoginPayload',
  accessToken: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  login: LoginPayload,
  createElection: Election,
  voteOnElection: Scalars['Boolean'],
  uploadFile: File,
  createPoll: Poll,
  voteOnPoll: Scalars['Boolean'],
};


export type MutationLoginArgs = {
  input: LoginInput
};


export type MutationCreateElectionArgs = {
  input: ElectionInput
};


export type MutationVoteOnElectionArgs = {
  input: VoteElectionInput
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']
};


export type MutationCreatePollArgs = {
  input: PollInput
};


export type MutationVoteOnPollArgs = {
  input: VotePollInput
};

export type Poll = {
   __typename?: 'Poll',
  id: Scalars['ID'],
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  description: Scalars['String'],
  question: Scalars['String'],
  options: Array<PollOption>,
  censuses: Array<Census>,
  results: Array<PollResults>,
};

export type PollInput = {
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  description: Scalars['String'],
  censuses: Array<CensusInput>,
  question: Scalars['String'],
  options: Array<Scalars['String']>,
};

export type PollOption = {
   __typename?: 'PollOption',
  id: Scalars['ID'],
  text: Scalars['String'],
};

export type PollResults = {
   __typename?: 'PollResults',
  id: Scalars['ID'],
  votes: Scalars['Int'],
  option: PollOption,
  group: Scalars['String'],
  location: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  users: Array<User>,
  user: User,
  me: User,
  candidates: Array<Candidate>,
  candidate: Candidate,
  electoralProcesses: Array<ElectoralProcess>,
  electoralProcess: ElectoralProcess,
  /** Devuelve aquellos procesos electorales que aún no han sido iniciados */
  futureElectoralProcesses: Array<ElectoralProcess>,
  /** Devuelve aquellos procesos electorales que han sido finalizados */
  pastElectoralProcesses: Array<ElectoralProcess>,
  elections: Array<Election>,
  pendingElections: Array<Election>,
  election: Election,
  census: Census,
  censuses: Array<Census>,
  polls: Array<Poll>,
  poll: Poll,
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryCandidateArgs = {
  id: Scalars['ID']
};


export type QueryElectoralProcessArgs = {
  id: Scalars['ID']
};


export type QueryElectionArgs = {
  id: Scalars['ID']
};


export type QueryCensusArgs = {
  id: Scalars['ID']
};


export type QueryCensusesArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryPollArgs = {
  id: Scalars['ID']
};

/** All possible roles on app */
export enum Role {
  Admin = 'ADMIN',
  Secretary = 'SECRETARY'
}


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  uid: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  roles: Array<Role>,
};

export type VoteElectionInput = {
  candidate: Scalars['ID'],
  election: Scalars['ID'],
};

export type VotePollInput = {
  option: Scalars['ID'],
  poll: Scalars['ID'],
};

export type Voter = {
   __typename?: 'Voter',
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  uid: Scalars['String'],
};

export type LoginMutationVariables = {
  input: LoginInput
};


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', accessToken: string } };

export type PastElectionResultsQueryVariables = {};


export type PastElectionResultsQuery = { __typename?: 'Query', pastElectoralProcesses: Array<{ __typename: 'Election', id: string, description: string, start: string, end: string } | { __typename: 'Poll', id: string, description: string, start: string, end: string }> };

export type ElectionResultQueryVariables = {
  id: Scalars['ID']
};


export type ElectionResultQuery = { __typename?: 'Query', election: { __typename?: 'Election', description: string, start: string, end: string, results: Array<{ __typename?: 'ElectionResults', votes: number, candidate: { __typename?: 'Candidate', firstName: string, lastName: string } }> } };

export type VotesQueryVariables = {};


export type VotesQuery = { __typename?: 'Query', pendingElections: Array<{ __typename?: 'Election', id: string, start: string, end: string, description: string }> };

export type CandidatesOfElectionQueryVariables = {
  id: Scalars['ID']
};


export type CandidatesOfElectionQuery = { __typename?: 'Query', election: { __typename?: 'Election', start: string, end: string, description: string, candidates: Array<{ __typename?: 'Candidate', id: string, firstName: string, lastName: string }> } };

export type VoteElectionMutationVariables = {
  input: VoteElectionInput
};


export type VoteElectionMutation = { __typename?: 'Mutation', voteOnElection: boolean };


export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const PastElectionResultsDocument = gql`
    query PastElectionResults {
  pastElectoralProcesses {
    __typename
    ... on Election {
      id
      description
      start
      end
    }
    ... on Poll {
      id
      description
      start
      end
    }
  }
}
    `;

/**
 * __usePastElectionResultsQuery__
 *
 * To run a query within a React component, call `usePastElectionResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePastElectionResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePastElectionResultsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePastElectionResultsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PastElectionResultsQuery, PastElectionResultsQueryVariables>) {
        return ApolloReactHooks.useQuery<PastElectionResultsQuery, PastElectionResultsQueryVariables>(PastElectionResultsDocument, baseOptions);
      }
export function usePastElectionResultsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PastElectionResultsQuery, PastElectionResultsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PastElectionResultsQuery, PastElectionResultsQueryVariables>(PastElectionResultsDocument, baseOptions);
        }
export type PastElectionResultsQueryHookResult = ReturnType<typeof usePastElectionResultsQuery>;
export type PastElectionResultsLazyQueryHookResult = ReturnType<typeof usePastElectionResultsLazyQuery>;
export type PastElectionResultsQueryResult = ApolloReactCommon.QueryResult<PastElectionResultsQuery, PastElectionResultsQueryVariables>;
export const ElectionResultDocument = gql`
    query ElectionResult($id: ID!) {
  election(id: $id) {
    description
    start
    end
    results {
      votes
      candidate {
        firstName
        lastName
      }
    }
  }
}
    `;

/**
 * __useElectionResultQuery__
 *
 * To run a query within a React component, call `useElectionResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useElectionResultQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useElectionResultQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useElectionResultQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ElectionResultQuery, ElectionResultQueryVariables>) {
        return ApolloReactHooks.useQuery<ElectionResultQuery, ElectionResultQueryVariables>(ElectionResultDocument, baseOptions);
      }
export function useElectionResultLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ElectionResultQuery, ElectionResultQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ElectionResultQuery, ElectionResultQueryVariables>(ElectionResultDocument, baseOptions);
        }
export type ElectionResultQueryHookResult = ReturnType<typeof useElectionResultQuery>;
export type ElectionResultLazyQueryHookResult = ReturnType<typeof useElectionResultLazyQuery>;
export type ElectionResultQueryResult = ApolloReactCommon.QueryResult<ElectionResultQuery, ElectionResultQueryVariables>;
export const VotesDocument = gql`
    query Votes {
  pendingElections {
    id
    start
    end
    description
  }
}
    `;

/**
 * __useVotesQuery__
 *
 * To run a query within a React component, call `useVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useVotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VotesQuery, VotesQueryVariables>) {
        return ApolloReactHooks.useQuery<VotesQuery, VotesQueryVariables>(VotesDocument, baseOptions);
      }
export function useVotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VotesQuery, VotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VotesQuery, VotesQueryVariables>(VotesDocument, baseOptions);
        }
export type VotesQueryHookResult = ReturnType<typeof useVotesQuery>;
export type VotesLazyQueryHookResult = ReturnType<typeof useVotesLazyQuery>;
export type VotesQueryResult = ApolloReactCommon.QueryResult<VotesQuery, VotesQueryVariables>;
export const CandidatesOfElectionDocument = gql`
    query CandidatesOfElection($id: ID!) {
  election(id: $id) {
    start
    end
    description
    candidates {
      id
      firstName
      lastName
    }
  }
}
    `;

/**
 * __useCandidatesOfElectionQuery__
 *
 * To run a query within a React component, call `useCandidatesOfElectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCandidatesOfElectionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCandidatesOfElectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCandidatesOfElectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CandidatesOfElectionQuery, CandidatesOfElectionQueryVariables>) {
        return ApolloReactHooks.useQuery<CandidatesOfElectionQuery, CandidatesOfElectionQueryVariables>(CandidatesOfElectionDocument, baseOptions);
      }
export function useCandidatesOfElectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CandidatesOfElectionQuery, CandidatesOfElectionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CandidatesOfElectionQuery, CandidatesOfElectionQueryVariables>(CandidatesOfElectionDocument, baseOptions);
        }
export type CandidatesOfElectionQueryHookResult = ReturnType<typeof useCandidatesOfElectionQuery>;
export type CandidatesOfElectionLazyQueryHookResult = ReturnType<typeof useCandidatesOfElectionLazyQuery>;
export type CandidatesOfElectionQueryResult = ApolloReactCommon.QueryResult<CandidatesOfElectionQuery, CandidatesOfElectionQueryVariables>;
export const VoteElectionDocument = gql`
    mutation voteElection($input: VoteElectionInput!) {
  voteOnElection(input: $input)
}
    `;
export type VoteElectionMutationFn = ApolloReactCommon.MutationFunction<VoteElectionMutation, VoteElectionMutationVariables>;

/**
 * __useVoteElectionMutation__
 *
 * To run a mutation, you first call `useVoteElectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteElectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteElectionMutation, { data, loading, error }] = useVoteElectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVoteElectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VoteElectionMutation, VoteElectionMutationVariables>) {
        return ApolloReactHooks.useMutation<VoteElectionMutation, VoteElectionMutationVariables>(VoteElectionDocument, baseOptions);
      }
export type VoteElectionMutationHookResult = ReturnType<typeof useVoteElectionMutation>;
export type VoteElectionMutationResult = ApolloReactCommon.MutationResult<VoteElectionMutation>;
export type VoteElectionMutationOptions = ApolloReactCommon.BaseMutationOptions<VoteElectionMutation, VoteElectionMutationVariables>;