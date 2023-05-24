// 泛型
const print2 = <T>(data: T) => {
  console.log(data);
};

function print<T>(data: T) {
  console.log(data);
}

print<string>('Jason');
print<number>(99);
print<boolean>(true);

print2<string>('Jason');
print2<number>(123);
print2<boolean>(false);
