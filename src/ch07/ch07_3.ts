// extents 一般用法

// interface
interface A {
  name: string;
}

interface B extends A {}

const b: B = { name: '' };

// class
class AA {}
class BB extends AA {}

// 在條件判斷的 extends
// 子 extends 父
type T1 = string extends string ? string : number;
const a: T1 = '';

type T2 = B extends A ? string : number;

// 誰能滿足誰？
interface C {
  name: string;
}

interface D {
  name: string;
  age: number;
}

type T3 = D extends C ? string : number;

// 基本泛型用法
// type TT1 = 'Jason' extends 'Jason' ? string : number;
type TT1<T> = T extends 'Jason' ? T : number;
type RES = TT1<'Jason'>;

// Union 泛型用法
// 方式一
type TT2 = 'Jason' | 'Jason2' extends 'Jason' ? string : number;

// 方式二
type TT3<T> = T extends 'Jason' ? string : number;
type R1 = TT3<'Jason' | 'Jason2'>;

// 方式一和二的結果不同

// never
// never 是所有東西的子類別
type N1 = never extends 'Jason' ? string : number;

type N2<T> = T extends 'Jason' ? string : number;
// 被當成一個空的 union
type R3 = N2<never>;

type TT4<T> = [T] extends ['Jason'] ? string : number;
type R2 = TT4<'Jason' | 'Jason2'>;
