interface PersonInterface {
  readonly name: string;
  // age: number;

  greet(phrase: string): void;
}

interface SecondInterface {
  name: string;  // second inteface has the same as PersonInterface
}

class Person implements PersonInterface, SecondInterface {
   name: string;
   constructor (name: string) {
     this.name = name;
   }
   greet(phrase:string) {
    console.log(`${phrase} ${this.name}`);
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