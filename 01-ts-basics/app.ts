interface AddFunc {
  (num1: number, num2: number): number;
}
function add(num1:number, num2:number): number {
  return num1 + num2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log("Add result:",result);