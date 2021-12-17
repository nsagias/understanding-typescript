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
  driving() {
    console.log('Truck is driving...');
  }
  loadingCargo(amount: number) {
    console.log(`Loading cargo ...${amount}`);
  }
}