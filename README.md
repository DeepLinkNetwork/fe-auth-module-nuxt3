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

```bash
# Using pnpm
pnpm add -D fe-auth-module-nuxt3

# Using yarn
yarn add --dev fe-auth-module-nuxt3

# Using npm
npm install --save-dev fe-auth-module-nuxt3
```

2. Add `fe-auth-module-nuxt3` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["fe-auth-module-nuxt3"],
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

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/my-module
[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/my-module
[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
