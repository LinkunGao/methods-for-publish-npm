import zzz from "random-weighted-ts";
import { add, pick } from "ts-rollup_test";

zzz([{}, {}], () => 1);

add(1, 2);

const obj = {
  name: "bar",
  age: 12,
  sex: "male",
};

pick(obj, ["age", "name"]);
