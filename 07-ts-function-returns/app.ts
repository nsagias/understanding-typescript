interface AddFunc2 {
  (num1: number, num2: number): number;
}

interface PrintFunc {
  (num: number): void;
}

function addV5(num1:number, num2:number): number {
  const result = num1 + num2;
  return result;
}

const addV4: AddFunc2 = (num1: number, num2: number): number => num1 + num2;


// function void type
function printResult5(num:number): void {
  console.log('Result is: ' + num)
}


const printResult6: PrintFunc = (num:number): void => undefined;
const printResult7: PrintFunc = (num:number): void => console.log(`Expreession Result is: ${num}`);



// function declaration
printResult2(addV2(10,5));

// function expression
printResult3(addV5(8,3));  // does not return or console.log
printResult4(addV5(8,3));


// function types
let someRandomFunction1: Function;
let someRandomFunctionUsingArrows1: () => number;
let someRandomFunctionUsingArrowsAndParams1: (a: number, b: number) => number;


// function types with Callbacks
function addFunctionWithCallback1(num1: number, num2:number, callback: (result: number) => void) {
  const result = num1 + num2;
  callback(result);
}

addFunctionWithCallback1(10, 11, (result) => { console.log("this is anonymous result: ",result)});