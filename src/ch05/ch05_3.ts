// overload function 重載
function getData1(data: string): string[];
function getData1(data: number): number;
function getData1(data: boolean): boolean;
function getData1(data: unknown): unknown {
  console.log();
  if (typeof data === 'string') return [];
  if (typeof data === 'number') return 999;
  return false;
}

getData1(99);
getData1('');
getData1(false);
