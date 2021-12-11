interface AddFunc {
  (num1: number, num2: number, showResult: boolean, phrase: string): number;
}
function add(num1:number, num2:number, showResult: boolean, phrase: string): number {
  const result = num1 + num2;
  return result;
}
