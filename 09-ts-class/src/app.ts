class Department {
  name: string;
  employees: string[] = [];
  
  constructor(name: string) {
    this.name = name;
  }
  describe(this: Department): void {
    console.log(`Department name is: ${this.name}`);
  }

  addEmployee(employee:string): void {
    // this.employees.push(employee);
    this.employees = [...this.employees, employee];
  }
  
  printEmployeeInfo(): void {
    console.log("Number of employees",this.employees.length);
    console.log("A list of employees",this.employees);
  }
}

const marketing = new Department("Marketing");

marketing.describe();

marketing.addEmployee("Dingo");
marketing.printEmployeeInfo();

marketing.addEmployee("Bingo");
marketing.printEmployeeInfo();
