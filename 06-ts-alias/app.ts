type CombinerType = number | string;
type CombinerConversionType = 'as-number' | 'as-string';


interface Combine2 {
  (
    input1: CombinerType, 
    input2: CombinerType, 
    resultConversion: CombinerConversionType
  );
}

function combine2(
  input1: CombinerType, 
  input2: CombinerType, 
  resultConversion: CombinerConversionType) {
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


const combineAges2 = combine2(30, 26, 'as-number');
const combineNames2 = combine2("Bob", "toaster", 'as-string')