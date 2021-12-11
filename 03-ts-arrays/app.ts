
interface Person2 {
  name: string;
  age: number;
  hobbies: string[];
}
const person1: Person2 = {
  name: "Dingo",
  age: 1000,
  hobbies: ['sports', 'cookies']
};

let favouriteActivitiesString: string[];
let favouriteActivitiesNumber: number[];
let favouriteActivitiesAny: any[];



interface Product2 {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}

const product1: Product2 = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
