// ------------------- 擴充 -------------
// type Animal = {
//   name: string;
// };

// type Dog = Animal & {
//   age: number;
// };

// type Cat = Animal;

// const dog: Dog = {
//   name: '',
//   age: 99,
// };

// const cat: Cat = {
//   name: '',
// };

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   age: number;
// }

// const dog: Dog = {
//   name: '',
//   age: 99,
// };

// ---------- 合併 ---------

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dog: Animal = {
  name: '',
  age: 12,
};
