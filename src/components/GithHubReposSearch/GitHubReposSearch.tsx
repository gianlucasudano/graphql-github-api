import { useState } from 'react';
import { graphql } from 'src/gql';

import useSearchRepos from 'queries/useSearchRepos';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import SearchForm, { type RepoName } from './elements/SearchForm';

import Repos, { type RepoNodeProps } from './elements/Repos';

export const searchByRepoName = graphql(`
  query Search($repoName: String!, $limit: Int!) {
    search(query: $repoName, type: REPOSITORY, first: $limit) {
      edges {
        node {
          ... on Repository {
            forkCount
            id
            name
            resourcePath
            stargazerCount
          }
        }
      }
    }
  }
`);

function GitHubReposSearch() {
  const [repoName, setRepoName] = useState<RepoName>('');
  const variables = {
    repoName,
    limit: Number(import.meta.env.VITE_GITHUB_SEARCH_RESULT_LIMIT),
  };

  const { data, isInitialLoading } = useSearchRepos(
    searchByRepoName,
    variables
  );
  return (
    <Paper elevation={3}>
      <Stack gap={2} mt={2} mb={2} padding={4}>
        <SearchForm setRepoName={setRepoName} />
        {data && <Repos dataRepos={data.search.edges as RepoNodeProps[]} />}
        {isInitialLoading && (
          <Box>
            <LinearProgress />
          </Box>
        )}
      </Stack>
    </Paper>
  );
}

export default GitHubReposSearch;
