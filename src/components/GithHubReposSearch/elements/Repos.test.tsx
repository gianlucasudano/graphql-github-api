import { expect, describe, it } from 'vitest';
import { screen, render } from '@testing-library/react';

import { repositories } from 'mocks/handlers';
import Repos from './Repos';

describe('Repos', () => {
  it('displays a list of repositories', () => {
    render(<Repos dataRepos={repositories} />);

    expect(
      screen.getByRole('heading', { name: /repositories/i })
    ).toBeInTheDocument();
    for (let i = 0; i < repositories.length; i += 1) {
      expect(screen.getByText(repositories[i].node.name)).toBeInTheDocument();
    }
  });

  it('displays an info message when no repos are available', () => {
    render(<Repos dataRepos={[]} />);

    expect(
      screen.getByRole('heading', { name: /repositories/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/no repositories available/i)).toBeInTheDocument();
  });
});
