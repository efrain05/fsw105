let employees = []

function Employee(name,jobTitle,salary,status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}

Employee.prototype.contract = function(){
   console.log(` Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`) 
}

let bBall = new Employee("Lebron James", "Power Forward", "38M/yr", "Full-time")
let wide = new Employee("Mike Evans", "Wide Receiver", "16.5M/yr", "Full-time")
let football = new Employee("Tom Brady", "Quarterback", "25M/yr", "Contract")


bBall.contract();
wide.contract();
football.contract();