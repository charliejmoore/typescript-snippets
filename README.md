# TypeScript Snippets

[TypeScript Snippets](https://github.com/charliejmoore/typescript-snippets) contains a collection of assorted TypeScript helper functions. I created this repository mostly as a way to tinker around with TypeScript outside of web projects, and to have a simple playground to experiment with various tools/configurations/best practices.

### Snippet Contents

- [Arrays](https://github.com/charliejmoore/typescript-snippets/blob/main/src/array-utils.ts)
- [Dates](https://github.com/charliejmoore/typescript-snippets/blob/main/src/date-utils.ts)
- [Files](https://github.com/charliejmoore/typescript-snippets/blob/main/src/file-utils.ts)
- [Objects](https://github.com/charliejmoore/typescript-snippets/blob/main/src/object-utils.ts)
- [Random (mathematical)](https://github.com/charliejmoore/typescript-snippets/blob/main/src/random-utils.ts)

### Tools

- [GitHub Actions workflow](https://github.com/charliejmoore/typescript-snippets/tree/main/.github/workflows) to run unit tests upon pushing to the repo.
- [Jest](https://jestjs.io/) for unit testing.
- [TypeDoc](https://typedoc.org/) for generating documentation.

### Installation + Requirements

To build/run this project, you'll need to have [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed. [Here are](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instructions for installing those dependencies.

To get this code, download/clone the repo and run `npm install` in the project root directory to install dependencies.

### Tests

To run [unit tests](https://github.com/charliejmoore/typescript-snippets/tree/main/tests) for these snippets, run `npm test` at the project root.

### Documentation

You can read documentation (generated with [TypeDoc](https://typedoc.org/)) for this project [here](https://charliejmoore.github.io/typescript-snippets/).

To re-generate the documentation, run `npm run docs` in the project directory. The documentation will be located in the `docs/` directory.
