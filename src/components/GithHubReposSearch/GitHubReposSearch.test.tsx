import { expect, describe, it } from 'vitest';

import { renderWithClient } from 'queries/utils';

import { QueryClient } from '@tanstack/react-query';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { reactMockSearch } from 'mocks/handlers';
import GitHubReposSearch from './GitHubReposSearch';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('GitHubReposSearch', () => {
  it('displays the search form', () => {
    renderWithClient(queryClient, <GitHubReposSearch />);

    expect(
      screen.getByRole('textbox', { name: 'reponame' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('displays the progress bar', async () => {
    renderWithClient(queryClient, <GitHubReposSearch />);
    const user = userEvent.setup();
    const inputUsername = screen.getByRole('textbox', { name: 'reponame' });
    const submitButton = screen.getByRole('button', {
      name: /search/i,
    });

    await user.type(inputUsername, 'foobar');
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(inputUsername).toHaveValue('');
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  it('displays a repo list', async () => {
    renderWithClient(queryClient, <GitHubReposSearch />);
    const user = userEvent.setup();
    const inputUsername = screen.getByRole('textbox', { name: 'reponame' });
    const submitButton = screen.getByRole('button', {
      name: /search/i,
    });

    await user.type(inputUsername, 'react');
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(inputUsername).toHaveValue('');
      expect(
        screen.getByRole('heading', { name: /repositories/i })
      ).toBeInTheDocument();
      for (let i = 0; i < reactMockSearch.search.edges.length; i += 1) {
        expect(
          screen.getByText(reactMockSearch.search.edges[i].node.forkCount)
        ).toBeInTheDocument();
      }
    });
  });
});
