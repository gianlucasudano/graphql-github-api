import { render, screen } from '@testing-library/react';
import { renderWithClient } from 'queries/utils';
import { QueryClient } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('App', () => {
  it('Renders Hello World', () => {
    // ARRANGE
    renderWithClient(queryClient, <WrappedApp />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('textbox', { name: /reponame/i })
    ).toBeInTheDocument();
  });
  it('Renders Not Found if invalid path ', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/this-route-do-not-exist']}>
        <App />
      </MemoryRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', { name: /Not Found/i })
    ).toBeInTheDocument();
  });
});
