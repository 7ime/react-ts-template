# React Redux Typescript Template

Starter Template for Frontend applications

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For running this application you need to have:
* [NodeJs](https://nodejs.org/en/)

### Installing
```
npm install
```

### Run application
```
npm run start
```

### Deploy application
```
npm run build
```

### Run tests
```
npm run test
```

### Run storybook
```
npm run storybook
```

### Deploy storybook
```
npm run build-storybook
```

### Ecosystem

* [TypeScript](https://typescriptlang.org/) - primary Language.
* [React.js](https://reactjs.org/) - library for building user interfaces.
* [Redux](https://redux.js.org/) - managing app state.
* [Redux toolkit](https://redux-toolkit.js.org/) - the official, opinionated, batteries-included toolset for efficient Redux development.
* [Redux saga](https://redux-saga.js.org/) - library that aims to make application side effects.
* [Reselect](https://github.com/reduxjs/reselect) - simple “selector” library for Redux.
* [React router](https://reactrouter.com/) - collection of navigational components.
* [Webpack](https://webpack.js.org/) - is used to compile JavaScript modules.
* [Babel](https://babeljs.io/) - to be able to use a new generation of javascript.
* [ESlint](https://eslint.org/) - linting code.
* [Jest](https://jestjs.io/) - testing Framework.
* [Redux saga test plan](https://github.com/jfairbank/redux-saga-test-plan) - makes testing sagas a breeze.
* [Axios](https://github.com/axios/axios) - promise based HTTP client for the browser and node.js.
* [Axios mock adapter](https://github.com/ctimmerm/axios-mock-adapter) - allows to easily mock requests.
* [Lodash](https://lodash.com/) - a modern JavaScript utility library delivering modularity, performance & extras.
* [I18next](https://www.i18next.com/) - internationalization-framework.
* [CSS modules](https://github.com/css-modules/css-modules) - to solve the css class namespace problem.
* [Sass](https://sass-lang.com/) - CSS with superpowers.
* [Storybook](https://storybook.js.org/) - is an open source tool for developing UI components in isolation.

### Testing
##### Test files are created next to files of components, functions, and classes

- For components
```
    button
        * index.tsx
        * index.spec.tsx
```

- For functions or classes
```
    invariant
        * index.ts
        * index.spec.ts
```

### Storybook
##### Stories files are created next to files of components
```
    button
        * index.tsx
        * index.stories.tsx
```

### Folder structure

* storybook - setting up storybook
* configs - configuration files for webpack, jest
* dist - files of the production version of the app
* static-storybook - files of the production version of the storybook
* src - application code
    * \__mocks__ - for mocks
    * \__tests__ - for tests
    * api
        * config - configuring for the api
        * fetcher - implementation for interacting with the server
        * paths - api paths
    * assets (fonts, images, styles)
    * components
        * app - main component
        * common - common components for the entire application
        * context - for react contexts
        * hoc-helpers - higher-order components for the entire app
        * hook-helpers - reused hooks for the entire app
        * scenes - analog of pages
            ```
                home-scene
                    * components (for this scene)
                        * presentation
                            * index.tss
                            * index.spec.tsx
                            * index.stories.tsx
                    * index.tsx
                    * index.spec.tsx
                    * index.stories.tsx
                    * index.module.scss
            ```
        * ui - ui components (button, textfields etc)
            ```
                buttons
                    * components
                        * button
                            * index.tsx
                            * index.spec.tsx
                            * index.stories.tsx
                        * buttonLink
                            * index.tsx
                            * index.spec.tsx
                            * index.stories.tsx
                    * model
                        * index.ts
                    * styles
                        * button.module.scss
            ```
    * constants - common constant
    * entities - stores entity models and DTO that come from the server
    * helpers - reused functions
    * i18n - setup, translations for internationalization
    * models - various reused interfaces, types
    * routing
        * model - this file contains the model for routing
        * router - this file responsible for connecting root (page) components
        * routes - this file contains all the application paths
    * services - services for interacting with the server for entities
    * store - contains reducers, actions, selectors, sagas, states separately for each entity and their tests
        ```
            posts
                * action
                    * index.ts
                    * index.spec.ts
                * saga
                    * index.ts
                    * index.spec.ts
                * reducer
                    * index.ts
                    * index.spec.ts
                * selector
                    * index.ts
                    * index.spec.ts
                * state
                    * index.ts
        ```
    * toolbox
        * custom-types - own type
        * environment - setting up the environment (prod, dev, test)
        * injects - this folder contains decorators to embed the functionality
        * middleware - redux middleware
        * tests - auxiliary tools for tests
        * type-definitions - d.ts files
        * utils - auxiliary tool
