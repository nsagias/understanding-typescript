type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {};

type ElevatedEmployeeRole = Admin & Employee;

const e1: ElevatedEmployeeRole = {
  name: "Nick",
  privileges: ['create-server'],
  startDate: new Date()
};

// Can use types with any type vs interfaces with union types
// with unions
type CombinedTypes = string | number;
type NumericType = number | boolean;

// intersecton combined types
type Universal = CombinedTypes & NumericType;


// using intersecting types in a function
function add(a: CombinedTypes, b: CombinedTypes) {
  // this is a Type Guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}


type UnknownEmployeeType = Employee | Admin;


const PRIVILEGES = 'privileges';
const STARTDATE = 'startDate'; 

function printEmployeeInformation(employee: UnknownEmployeeType): void {
  console.log(`Name of ${employee.name}`);
  if (PRIVILEGES in employee) {
    console.log(`Priviledge of ${employee.privileges}`);
  }
  if (STARTDATE in employee) {
    console.log(`Start date ${employee.startDate}`);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({name:"Nick", startDate: new Date()});


// Type Guard with classes
class Car {
  drive() {
    console.log('Car is driving...');
  }
}

class Truck {
  drive() {
    console.log('Truck is driving...');
  }
  loadingCargo(amount: number) {
    console.log(`Loading cargo ...${amount}`);
  }
}

// union type
type Vehicle =  Car | Truck;

const c1 = new Car();
const t1 = new Truck();

// const LOADING_CARGO = 'loadingCargo';
// function useVehicle(vehicle: Vehicle): void {
//   vehicle.drive();
//   if (LOADING_CARGO in vehicle) {
//     vehicle.loadingCargo(1000);
//   }
// }

// use classes ad type guards
function useVehicle(vehicle: Vehicle): void {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadingCargo(1000);
  }
}
useVehicle(c1);
useVehicle(t1);



// Descriminated Union pattern for objects
// could use classes again


interface Bird {
  flyingSpeed: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;