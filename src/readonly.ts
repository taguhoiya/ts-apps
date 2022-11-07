type MyObj = {
  bar: string
  hoge?: string
  readonly foo: string;
};

const obj: MyObj = {
  bar: "bar",
  foo: "Do not change me!",
};

// これは MyObjのfooプロパティがreadonlyなのでコンパイルエラー
// obj.foo = "hi";

// 引数のオブジェクトの型に積極的にreadonlyを付けるべき
// さらに言えば、readonlyという道具が存在するにも関わらずreadonlyが付いていないということは、そのプロパティを勝手に変更するかもしれないよという意思表示
console.log(obj);

function sum(obj: Readonly<MyObj>) {
  // obj.bar = 999; // これはコンパイルエラー
  return obj.bar + obj.hoge + obj.foo;
}