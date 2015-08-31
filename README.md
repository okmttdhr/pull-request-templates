# pull-request-templates

## Install

Install dependencies.

```bash
$ npm install
```

## Run

```bash
npm run hot-dev-server
npm run start-hot
```

To start a react-hot electron app development !

> Please make sure you have a `electron` environment variable which is linked to your Electron binary in your terminal. Otherwise you should refer [Run your app](https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md#run-your-app) document for run this on your computer.


## Package

```bash
npm run package
```

#### Default Ignore modules

We add some module's `peerDependencies` to ignore option as default for application size reduction.

- `babel-core` is required by `babel-loader` and its size is ~19 MB
- `node-libs-browser` is required by `webpack` and its size is ~3MB.

> **Note:** If you want to use any above modules in runtime, for example: `require('babel/register')`, you should move them form `devDependencies` to `dependencies`.


