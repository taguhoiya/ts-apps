interface IHoge {
  message: string;
  onChangeMessage(cb: (msg: string) => void): void;
}

type HogeType = {
  message: string;
  onChangeMessage(cb: (msg: string) => void): void;
  errorCode: number;
};

interface IHoge {
  errorCode: number;
}

let hoge1: IHoge;
let hoge2: HogeType;

hoge1 = hoge2;
hoge2 = hoge1;
