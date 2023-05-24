// function
// ts

const get = (a: number, b: string) => a + b;

// type
type Info = {
  name: string;
  age: number;
};

const createUserInfo = (info: Info) => {
  console.log(info.name);
  return info;
};

// never
const getUserData = (): never => {
  throw new Error('error message');
};

// void
const hello = (): void => {
  console.log('hello');
};

// return [] (被免 union 情況發生)
const getArr = () => {
  // return [0, 1, 'Jason'] as const;
  return [0, 1, 'Jason'] as [number, number, string];
};

const [id, age, userName] = getArr();
