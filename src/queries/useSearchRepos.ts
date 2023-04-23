import { useQuery } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

import { searchByRepoName } from 'components/GithHubReposSearch';

const useSearchRepos = (
  query: typeof searchByRepoName,
  variables: {
    repoName: string;
    limit: number;
  }
) => {
  const endpoint = `${import.meta.env.VITE_GITHUB_ENDPOINT}`;
  const headers = {
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  };

  const graphQLClient = new GraphQLClient(endpoint, headers);

  const queryFunction = async () => graphQLClient.request(query, variables);
  const queryKey = variables.repoName;

  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFunction,
  });
};

export default useSearchRepos;
