<!--
- Name: fe-auth-module-nuxt3
- Developer - @DeepLinkNetwork
- Package name: fe-module
- Description: This auth module for MicroFrontend websites.
-->

# Fe Auth Module Nuxt3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

This is auth module for MicroFrontend websites.

- [✨ By DeepLinkNetwork as Deepender](https://github.com/DeepLinkNetwork)

## Features

- 🚠 &nbsp; Automatically Add List of Auth Required in App

## Quick Setup

1. Add `fe-auth-module-nuxt3` dependency to your project

- As NPM private package is not free, we will use IWBI Organization Github Package Registry to host our package privately.

  - [✨ https://github.com/orgs/IWBI/packages](https://github.com/orgs/IWBI/packages)

- Using the Package FROM **IWBI npm packages** ✨

  - To use the package in another project, other users will need to add this registry to their npm configuration:

```bash
npm config set @iwbi:registry https://npm.pkg.github.com/iwbi
```

- Then user can install the package as usual:

```bash
npm install @iwbi/fe-auth-module-nuxt3
```

2. Add `fe-auth-module-nuxt3` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@iwbi/fe-auth-module-nuxt3"],
});
```

That's it! You can now use `fe-auth-module-nuxt3` in your Nuxt app ✨

## Development # Using yarn

```bash
# Install dependencies
yarn install

# Generate type stubs
yarn dev:prepare

# Develop with the playground
yarn dev

# Build the playground
yarn dev:build

# Run ESLint
yarn  lint

# Run Vitest
yarn test
yarn test:watch

# Release new version
yarn release
```

- Create a .env file in the root of the project for playground to work with the following information (found in example.env) ✨

```text
CBA_PREFIX=test
BASE_URL=https://test-v2-api.wellcertified.com/
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://github.com/orgs/IWBI/packages/npm/fe-auth-module-nuxt3/126263584
[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://github.com/orgs/IWBI/packages/npm/fe-auth-module-nuxt3/126263584
[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
