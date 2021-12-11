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
const printResult4: PrintFunc = (num:number): void => console.log(`Expreession Result is: ${num}`);



// function declaration
printResult2(addV2(10,5));

// function expression
printResult3(addV3(8,3));  // does not return or console.log
printResult4(addV3(8,3));


// function types
let someRandomFunction: Function;
let someRandomFunctionUsingArrows: () => number;
let someRandomFunctionUsingArrowsAndParams: (a: number, b: number) => number;


// function types with Callbacks
function addFunctionWithCallback(num1: number, num2:number, callback: (result: number) => void) {
  const result = num1 + num2;
  callback(result);
}
