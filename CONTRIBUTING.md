# Contributing

Thank you for contributing, we accept all types of contributions from typo fixes to new features.

### Reporting Issues

Before submitting an issue, make sure your issue hasn't already been reported by checking the [issue tracker](https://github.com/samarmohan/react-text-loop-next/issues).

## Development

##### We follow the [GitHub Flow](https://guides.github.com/introduction/flow/)

### Setup

1. Fork, then clone the repo:
   `git clone https://github.com/YOUR_USERNAME/react-text-loop-next.git`
2. Run `npm ci` in the project root

### Fixing issues

1. Find an [issue](https://github.com/samarmohan/react-text-loop-next/issues) that you'd like to work on

2. Create a branch, e.g. `patch-#`, `fixes-issue-#`, `feature/description`

3. Make your changes. The entry point is [src/index.ts](./src/index.ts)

4. See [Submitting Changes](#submitting-changes) below

### New Features

Please create an issue before starting something big, we do not want to waste your time implementing a feature we won't merge.

## Codebase reference

Building: We have n [es modules tsconfig](./tsconfig.esm.json) for different build targets. The [base tsconfig](./tsconfig.base.json) is used for generating types.

Quality: ESLint and biome are use to maintain codebase quality.

Structure: The structure of the codebase is very simple.

- [src](./src/): The source code
  - [index.ts](./src/index.ts): exports the main [TextLoop](./src/TextLoop.tsx) component.
  - [utils.ts](./src/utils.ts): Random utils that [TextLoop](./src/TextLoop.tsx) uses.
  - [TextLoop.tsx](./src/index.ts): This is the one and only component. All the magic happens here.
