# graphql-github-api

https://graphql-github-api.vercel.app/

## GOALS
Simple React Application that renders the list of react repositories.

Use the GitHub Graphql API v4 to fetch the list of repositories.

# Frontend Test: Home Task

## Tech Approach

`Initial App Setup`:

To speed up the initial setup, I utilized my [starter web application](https://github.com/gianlucasudano/web-dev-lab).
While this allowed for more time to understand the integration of dependencies required for this home task.

* **Pros**: Environment based on my previous expertise.
* **Cons**: No cons.

`Folder Structure`:

I followed a conventional approach to ensure separation of concerns, scalability, and easy management and accessibility of resources.

* **Pros**: Ensures easy management and accessibility of resources.
* **Cons**: No cons

`UI and Use of Third-Party Libraries`:

To expedite the development process, I utilized pre-built components and combined them to create custom components.

In a real project, there are more factors to consider beyond simply selecting an external library. Particularly in anticipation of implementing an internal Design System in the future, it may be preferable to opt for a less pre-packaged solution. While MUI components offer many features, not all of them may be applicable for the intended use case.

* **Pros**: Accelerates implementation and allows for greater focus on the primary task.
* **Cons**: There is a minor risk associated with using Material-UI, as it can occasionally be slow or buggy. 

`Data fetching and queries`:

I used [TanStack Query](https://tanstack.com/query/v4)
* **Pros**: Speeds up implementation and allows for focus on the main task.
* **Cons**: No cons

`Testing`:

I used React Testing Library and Vitest, which is recommended by most known frameworks.

* **Pros**: Ensures the quality of the app and provides a reliable testing framework.
[Vitest](https://vitest.dev/guide/comparisons.html#jest)
* **Cons**: No cons

## Tasks-Prioritization

When I started working on my task, my main objective was to retrieve data from GitHub APIs using hard-coded data and TanStack queries. To achieve this, I first created a personal access token in GitHub and used Postman to determine which data would be useful for my project.

As I worked on implementing my solution, I incrementally added the necessary features, optimized my code, and added missing tests.

As a result of these efforts, I was able to create a search form that allows users to search for GitHub repositories by repository name. The form displays a list of public repositories.

# Installation and setup

Download, or clone the repo in one folder and install packages.

```bash
To install dependencies use `npm install`
```

Create in the root folder a `.env.local` file and add an env var named `VITE_GITHUB_TOKEN` and assign it as value your token.


# Usage

To run the app, open your terminal and execute the command `npm run dev`. Once the app has started, you should see something similar to the following.
###  Runs the app `npm run dev`
```bash
     VITE v4.3.1  ready in 643 ms
      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
      ➜  press h to show help
```

#
### Navigates on the browser `http://localhost:5173`
Once the app and the server are running, open a browser and visit this page: http://localhost:5173

#

To run all tests, open a new tab in your terminal and execute the command `npm run test`. Once the tests has executed, you should see something similar to the following.

### Runs the tests `npm run test`
``` bash
    ✓ src/components/GithHubReposSearch/elements/Repos.test.tsx (2)
    ✓ src/App.test.tsx (2)
    ✓ src/components/GithHubReposSearch/GitHubReposSearch.test.tsx (3) 600ms

    Test Files  3 passed (3)
         Tests  7 passed (7)
      Start at  18:14:10
      Duration  2.52s (transform 355ms, setup 799ms, collect 2.33s, tests 946ms, environment 993ms, prepare 282ms)


    PASS  Waiting for file changes...
          press h to show help, press q to quit
```

#
## The project utilized the following tools:

- "vite": https://vitejs.dev/
- "vitest": https://vitest.dev/
- "react": https://reactjs.org/
- "typescript": https://www.typescriptlang.org/
- "msw": https://mswjs.io/
- "react-query": https://tanstack.com/query/latest
- "react-hook-form": https://react-hook-form.com/
- "testing-library": https://testing-library.com/
- "MUI": https://mui.com/
- "graphql": https://graphql.org/
- "graphql codegen": https://the-guild.dev/graphql/codegen



