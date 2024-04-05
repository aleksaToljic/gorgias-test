## Gorgias assignment

This repository contains an app scaffolding made with Vite,
that serves as a sandbox to work on recruitment assignment described below.

## Assignment

Please fork this repository and share after finished.

Using provided scaffolding, mocked api server (TBD) implement
a Tabular report presenting info about Customers and their performance statistics.

The Table should look like this:

|Id |Customer Full Name|Store Views|Product Clicks|Product checkouts|Sales|CTR|Conversion|
|---|---|---|---|---|---|---|---|
|X|Some Name| 50| 40 | 20 | 10 | (views/clicks) % | (sales/views) % |
|Y|Some Other Name| 10 | 8 | 4 | 3 | (views/clicks) % | (sales/views) % |

### Running the app and the dev server

```shell
yarn run dev
```

This command should start the app and the dev server. See command output for urls.

### Kick-started with:

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked`
  or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and
  add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
