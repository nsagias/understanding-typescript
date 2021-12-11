interface AddFunc2 {
  (num1: number, num2: number): number;
}

interface PrintFunc {
  (num: number): void;
}

function addV2(num1:number, num2:number): number {
  const result = num1 + num2;
  return result;
}

const addV3: AddFunc2 = (num1: number, num2: number): number => num1 + num2;


// function void type
function printResult2(num:number): void {
  console.log('Result is: ' + num)
}

const printResult3: PrintFunc = (num:number): void => undefined;

printResult2(addV2(10,5))