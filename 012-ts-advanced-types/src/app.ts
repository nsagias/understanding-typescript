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