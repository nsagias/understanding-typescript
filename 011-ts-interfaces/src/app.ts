interface PersonInterface {
  name: string;
  // age: number;

  greet(phrase: string): void;
}

interface SecondInterface {
  name: string;
}

class Person implements PersonInterface, SecondInterface {
   name: string;
   constructor (name: string) {
     this.name = name;
   }
}

let user1: PersonInterface;

user1 = {
  name: 'Nick',
  // age: 1000,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
};

user1.greet("Hello there"); 