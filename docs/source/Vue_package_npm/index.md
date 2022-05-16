# Vue Components package NPM

## Project Environment

- init Vue project
  ```bash
      Vue create my-app
  ```
- run project
  ```bash
      npm run serve
  ```

## Component encapsulation

- Create a package folder.
  Because we may need to packaging multiple components, so we can create a package folder under `src` to store all components that we want to upload to npm.

      - Under package folder, we can init a pig-button/index.vue component.
          ```html
              <template>
                    <div>
                    <button>test</button>
                    </div>
            </template>

            <script>
            export default {
            name: "pig-button",
            };
            </script>

            <style scoped>
                button {
                    width: 100px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                }
            </style>
        ```

- Use Vue plugin mode
  This is a very **important** step. Vue provides a public method:`install`. This method can be call when user use `Vue.use(plugin)`. And it also let our plugin register to global, and we can use it in anywhere.

  - Under package folder, we also need to create a index.js file.

    ```js
    // package/index.js
    // import the component
    import PigButton from "../package/pig-button/index.vue";
    // all components can be added into this array.
    const coms = [PigButton];

    // Batch component registration
    const install = function (Vue) {
      coms.forEach((com) => {
        Vue.component(com.name, com);
      });
    };

    export default install;
    ```

## Packaging components

- Modify `package.json`

  ```json
  {
    "scripts": {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint",
      "package": "vue-cli-service build --target lib ./src/package/index.js --name pig-ui --dest pig-ui"
    }
  }
  ```

  `--target lib`: To identify entry file for packaging
  `--name`: To identify project file name after packaging
  `--dest`: To identify project folder name after packaging

- Packaging
  ```bash
      npm run package
  ```

## Publish to NPM

- init a package.json in dist folder(pig-ui)

  ```bash
  cd pig-ui
  npm init -y
  ```

  - under package.json

  ```json
  {
    "name": "pig-ui-demo-vue",
    "version": "1.0.0",
    "description": "",
    "main": "pig-ui.common.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "LinkunGao",
    "license": "ISC"
  }
  ```

- upload steps
  1. Register a NPM account.
  2. If the people needs npm mirror source
     ```bash
         npm config set registry=https://registry.npmjs.org
     ```
  3. Add npm user
     ```bash
         cd pig-ui
         npm  adduser
     ```
  4. npm publish
  ```bash
      npm publish
  ```

## Test

1. Create a vue project and install the package
   ```bash
       npm i pig-ui-demo-vue
   ```
2. Under Vue project main.js,

   ```js
   import { createApp } from "vue";
   // import Vue from "vue";
   import App from "./App.vue";
   import PigUI from "pig-ui-demo-vue";
   import "pig-ui-demo-vue/pig-ui.css";

   // Vue.use(PigUi);
   createApp(App).use(PigUI).mount("#app");
   ```

3. Under App.vue

   ```html
   <template>
     <div>
       <img alt="Vue logo" src="./assets/logo.png" />
       <pig-button></pig-button>
     </div>
   </template>

   <script>
     export default {
       name: "App",
     };
   </script>
   ```
