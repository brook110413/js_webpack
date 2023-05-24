// unknown?
let name1: unknown = 'Jason';
name1 = 999;

// 斷言?
let name2: unknown = 'Jason2';
let name3 = name2 as string;

// 斷言應用
const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = (await res.json()) as {
    userId: number;
    id: number;
    title: string;
    complete: boolean;
  };
};

// any 與 unknown
// unknown -> 安全 any

const liveStatus = true;

const getLiveName = () => {
  let liveName: unknown;
  if (liveStatus) {
    liveName = 'Jason Live';
  } else {
    liveName = null;
  }
  return liveName;
};

const result = getLiveName();
if (typeof result === 'string') {
  result.split('');
}
