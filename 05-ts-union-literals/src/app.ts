interface Combine {
  (
    input1: number | string,
    input2: number | string, 
    resultConversion: 'as-number' | 'as-string'
  ): number | string
}

function combine1(
  input1: number | string, 
  input2: number | string, 
  resultConversion: 'as-number' | 'as-string') {
  let result;
  if (
    typeof input1 === "number" 
    && typeof input2 === "number" 
    || resultConversion === 'as-number') {

    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}


const combineAges1 = combine1(30, 26, 'as-number');
const combineNames1 = combine1("Bob", "toaster", 'as-string')