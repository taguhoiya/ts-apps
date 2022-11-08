const isString = (test: unknown): test is string => {
  return typeof test === "string";
};

const example = (foo: unknown) => {
  if (isString(foo)) {
    console.log(foo.length); // Error fooはまだunknownとして推論される
  }
};

type Bird = {
  fly: () => {
    /*  Do something */
  };
};

type Fish = {
  swim: () => {
    /*  Do something */
  };
};

const isBird = (test: Fish | Bird): test is Bird => {
  return (test as Bird).fly() !== undefined;
};

const example2 = (fishOrBird: Fish | Bird) => {
  if (isBird(fishOrBird)) {
    console.log(fishOrBird.fly); // Bird型として推論される
  } else {
    console.log(fishOrBird.swim); // Fish型として推論される
  }
};
