"use strict";
const GetUser = (input) => {
  if (input === "David") {
    const output = { id: "1", name: "taku", age: 10, isMarried: true };
    return output;
  }
  return "hoge";
};
console.log(GetUser("David"));
