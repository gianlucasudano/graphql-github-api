// eslint-disable-next-line import/no-extraneous-dependencies
import { graphql } from 'msw';

export const repositories = [
  {
    node: {
      name: 'rabbot',
      id: 'MDEwOlJlcG9zaXRvcnk1MjA5MTE3Ng==',
      resourcePath: '/arobson/rabbot',
      stargazerCount: 278,
      forkCount: 130,
    },
  },
  {
    node: {
      name: 'FooTable',
      id: 'MDEwOlJlcG9zaXRvcnk2NzEwMjAx',
      resourcePath: '/fooplugins/FooTable',
      stargazerCount: 2134,
      forkCount: 661,
    },
  },
  {
    node: {
      name: 'google-foobar',
      id: 'MDEwOlJlcG9zaXRvcnk3ODEzMTk5NQ==',
      resourcePath: '/n3a9/google-foobar',
      stargazerCount: 279,
      forkCount: 99,
    },
  },
  {
    node: {
      name: 'football',
      id: 'MDEwOlJlcG9zaXRvcnkxOTAwMDU5ODM=',
      resourcePath: '/google-research/football',
      stargazerCount: 3084,
      forkCount: 1196,
    },
  },
  {
    node: {
      name: 'FoolNLTK',
      id: 'MDEwOlJlcG9zaXRvcnkxMTQzMTUyNzU=',
      resourcePath: '/rockyzhengwu/FoolNLTK',
      stargazerCount: 1651,
      forkCount: 387,
    },
  },
  {
    node: {
      name: 'FootballData',
      id: 'MDEwOlJlcG9zaXRvcnkxNTIwNjA1Nw==',
      resourcePath: '/jokecamp/FootballData',
      stargazerCount: 605,
      forkCount: 367,
    },
  },
  {
    node: {
      name: 'FoodTrucks',
      id: 'MDEwOlJlcG9zaXRvcnkxNDE0NjY5Ng==',
      resourcePath: '/prakhar1989/FoodTrucks',
      stargazerCount: 401,
      forkCount: 374,
    },
  },
];

export const reactMockSearch = {
  search: {
    edges: [
      {
        node: {
          forkCount: 3700,
          id: 'MDEwOlJlcG9zaXRvcnkxMzU3ODYwOTM=',
          name: 'react',
          resourcePath: '/typescript-cheatsheets/react',
          stargazerCount: 40614,
        },
      },
      {
        node: {
          forkCount: 607,
          id: 'MDEwOlJlcG9zaXRvcnk5MzUwMzU0NQ==',
          name: 'React',
          resourcePath: '/HackYourFuture/React',
          stargazerCount: 261,
        },
      },
      {
        node: {
          forkCount: 23629,
          id: 'MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==',
          name: 'next.js',
          resourcePath: '/vercel/next.js',
          stargazerCount: 104881,
        },
      },
      {
        node: {
          forkCount: 23178,
          id: 'MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==',
          name: 'react-native',
          resourcePath: '/facebook/react-native',
          stargazerCount: 109144,
        },
      },
      {
        node: {
          forkCount: 100,
          id: 'MDEwOlJlcG9zaXRvcnk2MTU3MzcwMg==',
          name: 'react',
          resourcePath: '/ui-router/react',
          stargazerCount: 450,
        },
      },
      {
        node: {
          forkCount: 10007,
          id: 'MDEwOlJlcG9zaXRvcnkxOTg3MjQ1Ng==',
          name: 'react-router',
          resourcePath: '/remix-run/react-router',
          stargazerCount: 50169,
        },
      },
      {
        node: {
          forkCount: 127,
          id: 'MDEwOlJlcG9zaXRvcnk2NDQ2NjM2Mg==',
          name: 'react',
          resourcePath: '/zf-huangxiao/react',
          stargazerCount: 67,
        },
      },
      {
        node: {
          forkCount: 7069,
          id: 'MDEwOlJlcG9zaXRvcnkxMDU5NjMyNTM=',
          name: 'react.dev',
          resourcePath: '/reactjs/react.dev',
          stargazerCount: 9407,
        },
      },
      {
        node: {
          forkCount: 6699,
          id: 'MDEwOlJlcG9zaXRvcnkyMjY3MDg1Nw==',
          name: 'awesome-react',
          resourcePath: '/enaqx/awesome-react',
          stargazerCount: 54980,
        },
      },
      {
        node: {
          forkCount: 79,
          id: 'MDEwOlJlcG9zaXRvcnkzMDgzMTQ3Njc=',
          name: 'React',
          resourcePath: '/Internshala-Online-Trainings/React',
          stargazerCount: 116,
        },
      },
    ],
  },
};

export const getReposSearch = graphql.query('Search', (req, res, ctx) => {
  return res(ctx.data(reactMockSearch));
});

export const handlers = [getReposSearch];
