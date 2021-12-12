class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];
  
  constructor(private readonly id: string, private name: string) {
    this.id = id;
    this.name = name;
  }
  describe(this: Department): void {
    const describeOutput =
    `Department id: ${this.id}  
Department name: ${this.name}`;
    console.log(describeOutput);
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


const marketing = new Department("M", "Marketing");

marketing.describe();
marketing.addEmployee("Dingo");
marketing.addEmployee("Bingo");
marketing.printEmployeeInfo();


class ITDepartment extends Department {
  // admins: string[];
  constructor(id: string, public admins: string[]){
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("IT",['Dingo']);
it.describe();
it.addEmployee("Tina");
it.addEmployee("Boo");
it.printEmployeeInfo();

