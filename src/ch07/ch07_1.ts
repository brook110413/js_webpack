const hello1 = <T, U>(text1: T, text2: U): U => {
  let data: T;
  let data2: U;
  console.log(text1, text2);
  return text2;
};

hello1<string, number>('Jason', 99);
hello1<string, boolean>('Jason', true);
