type SomeType = {
  message: string;
};

function showMessage(obj: SomeType) {
  console.log(obj.message);
}

showMessage({ message: "Hello!" });
showMessage(new Error("error"));
