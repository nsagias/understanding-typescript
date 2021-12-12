interface AddFunc {
  (num1: number, num2: number, showResult: boolean, phrase: string): number;
}
function add(num1:number, num2:number, showResult: boolean, phrase: string) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error ('runtime type checking');
  }

  const result = num1 + num2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number_1: number;
number_1 = 5;

let number_2: number;
number_2 = 2.8;

let printResult1: boolean;
printResult1 = true;

let phraseResult1: string;
phraseResult1 = "Result is: ";

add(number_1, number_2, printResult1, phraseResult1);
