// interface
interface Card<T> {
  title: string;
  desc: T;
}

const printCardInfo = <U>(desc: U): Card<U> => {
  const data: Card<U> = {
    title: 'jason',
    desc,
  };
  return data;
};

console.log(printCardInfo<number>(9999));
