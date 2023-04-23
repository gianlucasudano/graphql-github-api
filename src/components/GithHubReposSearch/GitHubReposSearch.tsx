import { useState } from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { repositories } from 'mocks/handlers';
import SearchForm, { type RepoName } from './elements/SearchForm';

import Repos from './elements/Repos';

function GitHubReposSearch() {
  const [repoName, setRepoName] = useState<RepoName>('');

  return (
    <Paper elevation={3}>
      <Stack gap={2} mt={2} mb={2} padding={4}>
        <SearchForm setRepoName={setRepoName} />
        {repositories && <Repos dataRepos={repositories} />}
      </Stack>
    </Paper>
  );
}

export default GitHubReposSearch;
