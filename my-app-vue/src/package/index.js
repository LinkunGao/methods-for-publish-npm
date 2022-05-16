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
