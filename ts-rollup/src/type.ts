export interface Params {
  name: string;
  age: number;
  sex: string;
}

export type KeyTypes = keyof Params | Array<keyof Params>;
