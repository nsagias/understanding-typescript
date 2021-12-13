interface AddFn {
  (a: number, b: number): number;
}


interface Named {
  readonly name?: string;
  outputName?: string;
  nameMethod?(): string;
}

interface PersonInterface extends Named {
  // age: number;

  greet(phrase: string): void;
}

interface SecondInterface {
  name?: string;  // second inteface has the same as PersonInterface
}

class Person implements PersonInterface, SecondInterface, Named {
   name?: string;
   constructor (name?: string) {
     if (name) {
       this.name = name;
     }
   }
   greet(phrase:string) {
     if (this.name) {
       console.log(`${phrase} ${this.name}`);
     } else {
       console.log("Hello!");
     }
   }
}

// let user1: PersonInterface;

// user1 = {
//   name: 'Nick',
//   // age: 1000,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   }
// };

let user1 = new Person("Nick");

user1.greet("Hello there..."); 