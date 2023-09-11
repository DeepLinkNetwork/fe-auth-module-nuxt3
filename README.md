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

- As NPM private package is not free, we will use deeplinknetwork Organization Github Package Registry to host our package privately.

  - [✨ https://github.com/DeepLinkNetwork?tab=packages](https://github.com/DeepLinkNetwork?tab=packages)

2: Update .npmrc File

- Make sure that you have an .npmrc file in your project (or globally in your user's home directory) that points to the GitHub Packages registry. It should look something like this:

```bash
@deeplinknetwork:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

3: Authenticate to GitHub Packages

- Ensure that you're authenticated to GitHub Packages with the appropriate scope. You can authenticate using the following command:

```bash
npm login --registry=https://npm.pkg.github.com --scope=@deeplinknetwork
```

- Using the Package FROM **deeplinknetwork npm packages** ✨

  - To use the package in another project, other users will need to add this registry to their npm configuration:

```bash
npm config set @deeplinknetwork:registry https://npm.pkg.github.com/deeplinknetwork
```

- Install the Package Try installing the package again with the correct scope and package name:

```bash
npm install @deeplinknetwork/fe-auth-module-nuxt3
```

4. Add `fe-auth-module-nuxt3` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@deeplinknetwork/fe-auth-module-nuxt3"],
});
```

That's it! You can now use `fe-auth-module-nuxt3` in your Nuxt app ✨

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Generate type stubs using `yarn dev:prepare` or `npm run dev:prepare`
4. Create a .env file in the root of the project for playground to work with the following information (found in example.env) ✨

```env
CBA_PREFIX=test
BASE_URL=https://test-v2-api.wellcertified.com/
```

5. Launch playground using `yarn dev` or `npm run dev`

<!-- Badges -->

[npm-version-src]: https://img.shields.io/github/v/tag/DeepLinkNetwork/fe-auth-module-nuxt3?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://github.com/DeepLinkNetwork?tab=packages/npm/fe-auth-module-nuxt3/126263584
[npm-downloads-src]: https://img.shields.io/github/downloads/DeepLinkNetwork/fe-auth-module-nuxt3/total.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://github.com/DeepLinkNetwork?tab=packages/npm/fe-auth-module-nuxt3/126263584
[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
