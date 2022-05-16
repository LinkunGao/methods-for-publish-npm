interface Params {
  id: number;
  name: string;
}

const origin: Array<Params> = [{ id: 101, name: "ts" }];
const findUserNameById = (arr: Array<Params>, id: number): Array<Params> => {
  let result = arr.filter((item) => {
    return id === item.id;
  });
  return result;
};

let obj = findUserNameById(origin, 101);

console.log(obj[0].name + "is very good");

export {};
