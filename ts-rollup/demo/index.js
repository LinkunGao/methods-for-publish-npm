const origin = [{ id: 101, name: "ts" }];
const findUserNameById = (arr, id) => {
  let result = arr.filter((item) => {
    return id === item.id;
  });
  return result;
};

let obj = findUserNameById(origin, "101");
console.log(obj[0].name + "is very good");
