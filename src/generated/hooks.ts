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
  voters: Array<VoterInput>,
};

export type ColegiateBody = {
   __typename?: 'ColegiateBody',
  id: Scalars['ID'],
  name: Scalars['String'],
  users: Array<User>,
};

export type ColegiateBodyInput = {
  name: Scalars['String'],
};


export type Election = {
   __typename?: 'Election',
  id: Scalars['ID'],
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  description: Scalars['String'],
  maxVotes: Scalars['Int'],
  voteWeights: Array<VoteWeight>,
  candidates: Array<Candidate>,
  secretary: User,
  results: ResultsForElection,
  censuses: Array<Census>,
  delegates: Array<User>,
};


export type ElectionResultsArgs = {
  filter?: Maybe<ResultsFilter>
};

export type ElectionInput = {
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  description: Scalars['String'],
  censuses: Array<CensusInput>,
  delegates: Array<Scalars['ID']>,
  maxVotes?: Maybe<Scalars['Int']>,
  candidates: Array<CandidateInput>,
  voteWeights?: Maybe<Array<VoteWeightInput>>,
};

export type ElectionResults = {
   __typename?: 'ElectionResults',
  votes: Scalars['Int'],
  group?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  genre?: Maybe<Genre>,
  candidate: Candidate,
};

export type ElectionVote = {
   __typename?: 'ElectionVote',
  id: Scalars['ID'],
  user: Scalars['ID'],
  election: Scalars['ID'],
  candidate: Scalars['ID'],
};

export type ElectoralProcess = Election | Poll;

export type File = {
   __typename?: 'File',
  name: Scalars['String'],
};

export enum Genre {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER'
}

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
  modifyUser: User,
  createUser: User,
  deleteUser: User,
  login: LoginPayload,
  createColegiateBody: ColegiateBody,
  deleteCandidate: Candidate,
  createElection: Election,
  voteOnElection: Scalars['Boolean'],
  modifyElection: Election,
  deleteElection: Scalars['Boolean'],
  uploadFile: File,
  createPoll: Poll,
  voteOnPoll: Scalars['Boolean'],
  modifyPoll: Poll,
  deletePoll: Scalars['Boolean'],
};


export type MutationModifyUserArgs = {
  input: UserUpdateInput,
  id: Scalars['ID']
};


export type MutationCreateUserArgs = {
  input: UserInput
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationLoginArgs = {
  input: LoginInput
};


export type MutationCreateColegiateBodyArgs = {
  input: ColegiateBodyInput
};


export type MutationDeleteCandidateArgs = {
  id: Scalars['ID'],
  election: Scalars['ID']
};


export type MutationCreateElectionArgs = {
  input: ElectionInput
};


export type MutationVoteOnElectionArgs = {
  input: VoteElectionInput
};


export type MutationModifyElectionArgs = {
  input: UpdateElectionInput,
  id: Scalars['ID']
};


export type MutationDeleteElectionArgs = {
  id: Scalars['ID']
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


export type MutationModifyPollArgs = {
  input: UpdatePollInput,
  id: Scalars['ID']
};


export type MutationDeletePollArgs = {
  id: Scalars['ID']
};

export type Poll = {
   __typename?: 'Poll',
  id: Scalars['ID'],
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  description: Scalars['String'],
  maxVotes: Scalars['Int'],
  question: Scalars['String'],
  options: Array<PollOption>,
  isRealTime: Scalars['Boolean'],
  censuses: Array<Census>,
  secretary: User,
  results: ResultsForPoll,
  delegates: Array<User>,
};


export type PollResultsArgs = {
  filter?: Maybe<ResultsFilter>
};

export type PollInput = {
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  description: Scalars['String'],
  censuses: Array<CensusInput>,
  delegates: Array<Scalars['ID']>,
  maxVotes?: Maybe<Scalars['Int']>,
  question: Scalars['String'],
  options?: Maybe<Array<Scalars['String']>>,
  isRealTime: Scalars['Boolean'],
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
  group?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  genre?: Maybe<Genre>,
  option: PollOption,
};

export type PollVote = {
   __typename?: 'PollVote',
  id: Scalars['ID'],
  user: Scalars['String'],
  poll: Scalars['String'],
  option: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  users: Array<User>,
  user: User,
  me: User,
  colegiateBody: ColegiateBody,
  collegiateBodies: Array<ColegiateBody>,
  electoralProcesses: Array<ElectoralProcess>,
  electoralProcess: ElectoralProcess,
  pendingElectoralProcesses: Array<ElectoralProcess>,
  elections: Array<Election>,
  pendingElections: Array<Election>,
  election: Election,
  census: Census,
  censuses: Array<Census>,
  polls: Array<Poll>,
  poll: Poll,
  pendingPolls: Array<Poll>,
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryColegiateBodyArgs = {
  id: Scalars['ID']
};


export type QueryElectoralProcessesArgs = {
  open?: Maybe<Scalars['Boolean']>,
  finished?: Maybe<Scalars['Boolean']>
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

export type ResultsFilter = {
  group?: Maybe<Scalars['Boolean']>,
  location?: Maybe<Scalars['Boolean']>,
  genre?: Maybe<Scalars['Boolean']>,
};

export type ResultsForElection = {
   __typename?: 'ResultsForElection',
  /** Votantes habilitados */
  voters: Scalars['Int'],
  /** Votos Emitidos */
  votesCast: Scalars['Int'],
  /** Votos en blanco */
  whiteVotes: Scalars['Int'],
  results: Array<ElectionResults>,
};

export type ResultsForPoll = {
   __typename?: 'ResultsForPoll',
  /** Votantes habilitados */
  voters: Scalars['Int'],
  /** Votos Emitidos */
  votesCast: Scalars['Int'],
  /** Votos en blanco */
  whiteVotes: Scalars['Int'],
  results: Array<PollResults>,
};

/** All possible roles on app */
export enum Role {
  Admin = 'ADMIN',
  Secretary = 'SECRETARY',
  Voter = 'VOTER'
}

export type UpdateElectionInput = {
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  censuses?: Maybe<Array<CensusInput>>,
  delegates?: Maybe<Array<UserInput>>,
  candidates?: Maybe<Array<CandidateInput>>,
};

export type UpdatePollInput = {
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  description?: Maybe<Scalars['String']>,
  censuses?: Maybe<Array<CensusInput>>,
  delegates?: Maybe<Array<UserInput>>,
  question?: Maybe<Scalars['String']>,
  options?: Maybe<Array<Scalars['String']>>,
};


export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  uid: Scalars['String'],
  dni: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  roles: Array<Role>,
  genre: Genre,
  colegiateBody: ColegiateBody,
};

export type UserInput = {
  uid: Scalars['String'],
  dni: Scalars['String'],
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  roles?: Maybe<Array<Role>>,
  colegiateBody: Scalars['ID'],
  genre: Genre,
};

export type UserUpdateInput = {
  password?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Role>>,
  colegiateBody?: Maybe<Scalars['ID']>,
  genre?: Maybe<Genre>,
};

export type VoteElectionInput = {
  candidates: Array<Scalars['ID']>,
  election: Scalars['ID'],
};

export type VotePollInput = {
  options: Array<Scalars['ID']>,
  poll: Scalars['ID'],
};

export type Voter = {
   __typename?: 'Voter',
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  uid: Scalars['String'],
  dni: Scalars['String'],
};

export type VoterInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  uid: Scalars['String'],
  dni: Scalars['String'],
};

export type VoteWeight = {
   __typename?: 'VoteWeight',
  group: Scalars['String'],
  weight: Scalars['Float'],
};

export type VoteWeightInput = {
  group: Scalars['String'],
  weight: Scalars['Float'],
};

export type PastElectionResultsQueryVariables = {};


export type PastElectionResultsQuery = { __typename?: 'Query', electoralProcesses: Array<{ __typename?: 'Election', id: string, start: string, end: string, description: string } | { __typename?: 'Poll' }> };

export type CensusDataQueryVariables = {
  id: Scalars['ID']
};


export type CensusDataQuery = { __typename?: 'Query', election: { __typename?: 'Election', description: string, start: string, end: string, secretary: { __typename?: 'User', firstName: string, lastName: string }, delegates: Array<{ __typename?: 'User', firstName: string, lastName: string }>, censuses: Array<{ __typename?: 'Census', voters: Array<{ __typename?: 'Voter', firstName: string, lastName: string }> }> } };

export type LoginMutationVariables = {
  input: LoginInput
};


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', accessToken: string } };

export type PastElectionsQueryVariables = {};


export type PastElectionsQuery = { __typename?: 'Query', pendingElectoralProcesses: Array<{ __typename?: 'Election', id: string, start: string, end: string, description: string } | { __typename?: 'Poll', id: string, start: string, end: string, description: string }> };

export type ElectionResultQueryVariables = {
  id: Scalars['ID']
};


export type ElectionResultQuery = { __typename?: 'Query', election: { __typename?: 'Election', description: string, start: string, end: string, results: { __typename?: 'ResultsForElection', votesCast: number, whiteVotes: number, voters: number, results: Array<{ __typename?: 'ElectionResults', votes: number, candidate: { __typename?: 'Candidate', firstName: string, lastName: string } }> } } };

export type VotesQueryVariables = {};


export type VotesQuery = { __typename?: 'Query', pendingElections: Array<{ __typename?: 'Election', id: string, start: string, end: string, description: string }> };

export type CandidatesOfElectionQueryVariables = {
  id: Scalars['ID']
};


export type CandidatesOfElectionQuery = { __typename?: 'Query', election: { __typename?: 'Election', start: string, end: string, description: string, candidates: Array<{ __typename?: 'Candidate', id: string, firstName: string, lastName: string }> } };

export type PendingElectionsToVoteQueryVariables = {};


export type PendingElectionsToVoteQuery = { __typename?: 'Query', pendingElections: Array<{ __typename?: 'Election', id: string, start: string, end: string, description: string }> };

export type OptionsOnPollQueryVariables = {
  id: Scalars['ID']
};


export type OptionsOnPollQuery = { __typename?: 'Query', poll: { __typename?: 'Poll', start: string, end: string, description: string, options: Array<{ __typename?: 'PollOption', id: string, text: string }> } };

export type VoteElectionMutationVariables = {
  input: VoteElectionInput
};


export type VoteElectionMutation = { __typename?: 'Mutation', voteOnElection: boolean };

export type VotePollMutationVariables = {
  input: VotePollInput
};


export type VotePollMutation = { __typename?: 'Mutation', voteOnPoll: boolean };


export const PastElectionResultsDocument = gql`
    query PastElectionResults {
  electoralProcesses(finished: true) {
    ... on Election {
      id
      start
      end
      description
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
export const CensusDataDocument = gql`
    query CensusData($id: ID!) {
  election(id: $id) {
    description
    start
    end
    secretary {
      firstName
      lastName
    }
    delegates {
      firstName
      lastName
    }
    censuses {
      voters {
        firstName
        lastName
      }
    }
  }
}
    `;

/**
 * __useCensusDataQuery__
 *
 * To run a query within a React component, call `useCensusDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCensusDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCensusDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCensusDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CensusDataQuery, CensusDataQueryVariables>) {
        return ApolloReactHooks.useQuery<CensusDataQuery, CensusDataQueryVariables>(CensusDataDocument, baseOptions);
      }
export function useCensusDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CensusDataQuery, CensusDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CensusDataQuery, CensusDataQueryVariables>(CensusDataDocument, baseOptions);
        }
export type CensusDataQueryHookResult = ReturnType<typeof useCensusDataQuery>;
export type CensusDataLazyQueryHookResult = ReturnType<typeof useCensusDataLazyQuery>;
export type CensusDataQueryResult = ApolloReactCommon.QueryResult<CensusDataQuery, CensusDataQueryVariables>;
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
export const PastElectionsDocument = gql`
    query PastElections {
  pendingElectoralProcesses {
    ... on Election {
      id
      start
      end
      description
    }
    ... on Poll {
      id
      start
      end
      description
    }
  }
}
    `;

/**
 * __usePastElectionsQuery__
 *
 * To run a query within a React component, call `usePastElectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePastElectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePastElectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePastElectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PastElectionsQuery, PastElectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<PastElectionsQuery, PastElectionsQueryVariables>(PastElectionsDocument, baseOptions);
      }
export function usePastElectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PastElectionsQuery, PastElectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PastElectionsQuery, PastElectionsQueryVariables>(PastElectionsDocument, baseOptions);
        }
export type PastElectionsQueryHookResult = ReturnType<typeof usePastElectionsQuery>;
export type PastElectionsLazyQueryHookResult = ReturnType<typeof usePastElectionsLazyQuery>;
export type PastElectionsQueryResult = ApolloReactCommon.QueryResult<PastElectionsQuery, PastElectionsQueryVariables>;
export const ElectionResultDocument = gql`
    query ElectionResult($id: ID!) {
  election(id: $id) {
    description
    start
    end
    results {
      votesCast
      whiteVotes
      voters
      results {
        votes
        candidate {
          firstName
          lastName
        }
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
export const PendingElectionsToVoteDocument = gql`
    query pendingElectionsToVote {
  pendingElections {
    id
    start
    end
    description
  }
}
    `;

/**
 * __usePendingElectionsToVoteQuery__
 *
 * To run a query within a React component, call `usePendingElectionsToVoteQuery` and pass it any options that fit your needs.
 * When your component renders, `usePendingElectionsToVoteQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePendingElectionsToVoteQuery({
 *   variables: {
 *   },
 * });
 */
export function usePendingElectionsToVoteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PendingElectionsToVoteQuery, PendingElectionsToVoteQueryVariables>) {
        return ApolloReactHooks.useQuery<PendingElectionsToVoteQuery, PendingElectionsToVoteQueryVariables>(PendingElectionsToVoteDocument, baseOptions);
      }
export function usePendingElectionsToVoteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PendingElectionsToVoteQuery, PendingElectionsToVoteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PendingElectionsToVoteQuery, PendingElectionsToVoteQueryVariables>(PendingElectionsToVoteDocument, baseOptions);
        }
export type PendingElectionsToVoteQueryHookResult = ReturnType<typeof usePendingElectionsToVoteQuery>;
export type PendingElectionsToVoteLazyQueryHookResult = ReturnType<typeof usePendingElectionsToVoteLazyQuery>;
export type PendingElectionsToVoteQueryResult = ApolloReactCommon.QueryResult<PendingElectionsToVoteQuery, PendingElectionsToVoteQueryVariables>;
export const OptionsOnPollDocument = gql`
    query OptionsOnPoll($id: ID!) {
  poll(id: $id) {
    start
    end
    description
    options {
      id
      text
    }
  }
}
    `;

/**
 * __useOptionsOnPollQuery__
 *
 * To run a query within a React component, call `useOptionsOnPollQuery` and pass it any options that fit your needs.
 * When your component renders, `useOptionsOnPollQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOptionsOnPollQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOptionsOnPollQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OptionsOnPollQuery, OptionsOnPollQueryVariables>) {
        return ApolloReactHooks.useQuery<OptionsOnPollQuery, OptionsOnPollQueryVariables>(OptionsOnPollDocument, baseOptions);
      }
export function useOptionsOnPollLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OptionsOnPollQuery, OptionsOnPollQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OptionsOnPollQuery, OptionsOnPollQueryVariables>(OptionsOnPollDocument, baseOptions);
        }
export type OptionsOnPollQueryHookResult = ReturnType<typeof useOptionsOnPollQuery>;
export type OptionsOnPollLazyQueryHookResult = ReturnType<typeof useOptionsOnPollLazyQuery>;
export type OptionsOnPollQueryResult = ApolloReactCommon.QueryResult<OptionsOnPollQuery, OptionsOnPollQueryVariables>;
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
export const VotePollDocument = gql`
    mutation votePoll($input: VotePollInput!) {
  voteOnPoll(input: $input)
}
    `;
export type VotePollMutationFn = ApolloReactCommon.MutationFunction<VotePollMutation, VotePollMutationVariables>;

/**
 * __useVotePollMutation__
 *
 * To run a mutation, you first call `useVotePollMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVotePollMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [votePollMutation, { data, loading, error }] = useVotePollMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVotePollMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VotePollMutation, VotePollMutationVariables>) {
        return ApolloReactHooks.useMutation<VotePollMutation, VotePollMutationVariables>(VotePollDocument, baseOptions);
      }
export type VotePollMutationHookResult = ReturnType<typeof useVotePollMutation>;
export type VotePollMutationResult = ApolloReactCommon.MutationResult<VotePollMutation>;
export type VotePollMutationOptions = ApolloReactCommon.BaseMutationOptions<VotePollMutation, VotePollMutationVariables>;