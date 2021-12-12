class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];
  
  constructor(private id: string, private name: string) {
    this.id = id;
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

const marketing = new Department("1", "Marketing");

marketing.describe();

marketing.addEmployee("Dingo");
marketing.printEmployeeInfo();

marketing.addEmployee("Bingo");
marketing.printEmployeeInfo();
