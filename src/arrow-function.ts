type User = {
  id: string;
  name: string;
  age: number;
  isMarried: boolean;
};

const GetUser = (input: string): User | string => {
  if (input === "David") {
    const output = { id: "1", name: "taku", age: 10, isMarried: true };
    return output;
  }
  return "hoge";
};

console.log(GetUser("David"));
