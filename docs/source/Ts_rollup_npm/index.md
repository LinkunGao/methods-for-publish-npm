# TS Package with RollUp

## Init Project

    ```bash
    mkdir ts-rollup
    cd ts-rollup
    mkdir demo src
    touch src/index.ts
    touch rollup.config.js
    npm init -y
    npm install typescript tslib @rollup/plugin-typescript -D
    npm install --save-dev rollup-plugin-terser
    npx tsc --init

    ```

## Config

- rollup.config.js

```js
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.min.js",
    format: "esm",
  },
  plugins: [typescript(), terser()],
};
```

- package.json
  Use `files` to control what folders you want to upload to NPM.

```json
{
  "name": "ts-rollup",
  "version": "1.0.0",
  "description": "",
  "main": "dist/bundle.min.js",
  "scripts": {
    "build": "tsc && rollup -c rollup.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "typings": "dist/types/index.d.ts",
  "files": ["dist", "src"],
  "repository": {
    "type": "git",
    "url": ""
  },
  "license": "ISC",
  "devDependencies": {
    "@rollup/plugin-typescript": "^8.3.2",
    "rollup-plugin-terser": "^7.0.2",
    "tslib": "^2.4.0",
    "typescript": "^4.6.4"
  }
}
```

- tsconfig.js

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "ESNext",
    "declaration": true,
    "sourceMap": true,
    "declarationDir": "./dist/types"
  }
}
```

- To allow script import after build
  Add multiple output in `rollup.config.js`

```js
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      name: "Skycoco",
    },
  ],
  plugins: [typescript(), terser()],
};
```

    Then we need to modify package.json

```json
{
  "main": "dist/bundle.umd.js",
  "moudle": "dist/bundle.esm.js"
}
```

`main` is for `import`

`moudle` is for `require`

- In html script

```html
<script src="../dist/bundle.umd.js"></script>
<body>
  <script>
    //   Skycoco.add(10,10)
    const util = window.Skycoco;
    console.log(util.add(10, 20));
  </script>
</body>
```

## Rollup package .glsl/.vs/.fs/.vert/.fragment file

```bash
  npm i rollup-plugin-glslify --save-dev
```

In rollup.config.js, more see (https://blog.meglody.com/diary/%E4%BD%BF%E7%94%A8TypeScript%E5%BC%80%E5%8F%91WebGL%EF%BC%88%E4%B8%80%EF%BC%89%E4%BD%BF%E7%94%A8%E7%9D%80%E8%89%B2%E5%99%A8/)

```js
import glslify from "rollup-plugin-glslify";
export default {
  plugins: [typescript(), terser(), glslify()],
};
```

In root folder, create a `index.d.ts` file.

```ts
declare module "*.vert";
declare module "*.frag";
declare module "*.vs";
declare module "*.fs";
declare module "*.glsl";
```

## Rollup url loader

```bash
npm i @rollup/plugin-url -D
```

In rollup.config.js, more see (https://www.npmjs.com/package/@rollup/plugin-url)

```js
import url from "@rollup/plugin-url";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [url()],
};
```

In ts we can do

```ts
// src/index.js
import svg from "./image.svg";
console.log(`svg contents: ${svg}`);
```

Also in `index.d.ts`, we need to declare file. such as

```ts
declare module "*.svg";
declare module "*.hdr";
```

## test js online

[jsbin](https://jsbin.com/?html,output)

## Upload steps

- Upload steps

  ```bash
      npm adduser / npm login
      npm publish .
  ```

- Version
  use `Semantic version`

  1.2.3
  1: major, when you make a big change
  2: minor, when you add new functions
  3: patch, when you fix something

```bash
    npm version major
    npm version minor
    npm version patch
```
