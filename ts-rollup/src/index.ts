import { Params, KeyTypes } from "./type";
const add = (a: number, b: number): number => {
  return a + b;
};

const pick = function <T extends Record<any, any>>(
  params: Params,
  keys: KeyTypes
) {
  if (Array.isArray(keys)) {
    // return keys.map((key) => {
    //   return { [key]: params[key] };
    // });
    // 简写
    return keys.reduce((acc, cur) => ({ ...acc, [cur]: obj[cur] }), {});
  }
  return { [keys]: params[keys] };
};

const obj: Params = {
  name: "foo",
  age: 12,
  sex: "male",
};

pick(obj, "age"); // {name:"foo"}
pick(obj, ["name", "age"]); //{name:"foo",age:12}

export { add, pick };
