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