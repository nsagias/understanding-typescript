const names1 = ["nick", "bingo"];
const names2: any = [];
const names3: Array<any> = [];
const names4: Array<string> = [];
const names5: Array<number> = [];
const names6: Array<string | number> = [];

// can call string methods and no complaints 
// names4[0].split(' ');

// promises type
// const promise = new Promise((resolve, reject) => {});
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout( () => {
    resolve('This is done');
  }, 2000);
});

promise.then(x => console.log(x));


// custom Generics Functions
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

function merge2<T, U, V>(objA: T,objB: U, objC: V) {
  return Object.assign(objA, objB, objC);
}


const mergeObj =  merge<{name: string, hobbies: string[]}, {age: number}>({name: "Nick", hobbies: ['fun']}, {age: 1000});
const mergeOb2 =  merge2<{name: string},{hobbies: string[]}, {age: number}>({name: "Nick"}, {hobbies: ['any']}, {age: 1000});

console.log("mergeObj:",mergeObj);
console.log("mergeObj2:",mergeOb2);