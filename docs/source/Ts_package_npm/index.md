# Ts Packaging NPM

## Project Environment

- Create a root project.

  ```bash
  mkdir random-weighted-ts
  cd random-weighted-ts
  npm init -y
  npm i -D typescript
  npx tsc --init  // it will automatically generate a tsconfig.json file
  ```

- Config package.json

  ```json
  {
    "name": "random-weighted-ts",
    "version": "1.0.0",
    "description": "Randomly pick a element from an array of objects by a weight callback",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "repository": {
      "type": "git",
      "url": ""
    },
    "scripts": {
      "build": "npx tsc -p ."
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "typescript": "^4.6.4"
    }
  }
  ```

- Config tsconfig.json

  ```ts
  {
      "compilerOptions": {

          /* Language and Environment */
          "target": "es5" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
          "lib": [
          "DOM"
          ],
          /* Modules */
          "module": "commonjs" /* Specify what module code is generated. */,
          "rootDir": "./src" /* Specify the root folder within your source files. */,

          /* Emit */
          "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */,

          "sourceMap": true /* Create source map files for emitted JavaScript files. */,

          "outDir": "./dist" /* Specify an output folder for all emitted files. */,

          "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
          "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

          /* Type Checking */
          "strict": true /* Enable all strict type-checking options. */,


          /* Completeness */
          "skipLibCheck": true /* Skip type checking all .d.ts files. */
      }
  }

  ```

- create src and dist folder under root.

- add test command, and create a test/index.js in root folder.

  ```json
  {
    "scripts": {
      "build": "npx tsc -p .",
      "test": "node test"
    }
  }
  ```

- Upload steps

  ```bash
      npm adduser / npm login
      npm publish
  ```

- Version
  use `Semantic version`

  version: 1.2.3

  1: major, when you make a big change
  2: minor, when you add new functions
  3: patch, when you fix something

```bash
    npm version major
    npm version minor
    npm version patch
```
