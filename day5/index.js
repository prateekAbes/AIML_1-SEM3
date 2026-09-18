
class StudentWithConstructor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const student1 = new StudentWithConstructor("Aarav", 20);
console.log("With constructor:", student1);


class StudentWithoutConstructor {
  showMessage() {
    console.log("This class uses the default constructor.");
  }
}

const student2 = new StudentWithoutConstructor();
console.log("Without constructor:", student2);
student2.showMessage();


class SecA{
  static section = "A";
  static studentCount = 0;

  constructor(name, rollNo, address, mNo){
    this.name = name;
    this.rollNo = rollNo;
    this.address = address;
    this.mNo = mNo;
    SecA.studentCount++;
  }

  static getStudentCount(){
    return SecA.studentCount;
  }
}


const students = [
  new SecA("Aarav", 1, "Delhi", "9876543210"),
  new SecA("Diya", 2, "Mumbai", "9876543211"),
  new SecA("Kabir", 3, "Pune", "9876543212"),
  new SecA("Meera", 4, "Chennai", "9876543213"),
  new SecA("Rohan", 5, "Kolkata", "9876543214")
];

console.log("Five students:");
console.table(students);

console.log("Static member - Section:", SecA.section);
console.log("Static function - Student count:", SecA.getStudentCount());



class MobilePhone {
  setDetails(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  showDetails() {
    console.log(`${this.brand} ${this.model} costs Rs. ${this.price}.`);
  }
}

const phone = new MobilePhone();
phone.setDetails("Samsung", "Galaxy A55", 39999);

console.log("Brand accessed directly:", phone.brand);
console.log("Model accessed directly:", phone.model);
console.log("Price accessed directly:", phone.price);
phone.showDetails();



class Student {
  static totalStudents = 0;

  constructor(rollNo, name, marks) {
    this.rollNo = rollNo;
    this.name = name;
    this.marks = marks;
    Student.totalStudents++;
  }

  displayResult() {
    const result = this.marks >= 40 ? "Passed" : "Failed";

    console.log(`Roll No: ${this.rollNo}`);
    console.log(`Name: ${this.name}`);
    console.log(`Marks: ${this.marks}`);
    console.log(`Result: ${result}`);
  }

  static displayTotalStudents() {
    console.log(`Total students: ${Student.totalStudents}`);
  }
}

const studentA = new Student(101, "Ananya", 85);
const studentB = new Student(102, "Rohan", 35);
const studentC = new Student(103, "Meera", 62);

studentA.displayResult();
studentB.displayResult();
studentC.displayResult();
Student.displayTotalStudents();

class BankAccount {
  static bankName = "State Bank of India";

  constructor(accountNumber, holderName, balance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  depositAmount(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Deposit amount must be greater than 0.");
    }
  }

  withdrawalAmount(amount) {
    if (amount > this.balance) {
      console.log("Withdrawal failed: Insufficient balance.");
      return;
    }

    if (amount > 0) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. Remaining balance: ${this.balance}`);
    } else {
      console.log("Withdrawal amount must be greater than 0.");
    }
  }

  displayBalance() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Holder Name: ${this.holderName}`);
    console.log(`Current Balance: ${this.balance}`);
  }

  static bankInfo() {
    console.log("Bank Name: " + BankAccount.bankName);
    console.log("General Banking Information:");
    console.log("- Savings and current accounts are available.");
    console.log("- Customers can deposit and withdraw money securely.");
    console.log("- Transactions must respect available balance.");
  }
}

BankAccount.bankInfo();

const account1 = new BankAccount(1001, "Aarav", 5000);
const account2 = new BankAccount(1002, "Diya", 3000);

console.log("\nAccount 1 before transactions:");
account1.displayBalance();

console.log("\nAccount 2 before transactions:");
account2.displayBalance();

console.log("\nTransaction 1: Deposit into Account 1");
account1.depositAmount(1500);

console.log("\nTransaction 2: Withdraw from Account 1");
account1.withdrawalAmount(7000);

console.log("\nTransaction 3: Withdraw from Account 2");
account2.withdrawalAmount(3500);

console.log("\nTransaction 4: Deposit into Account 2");
account2.depositAmount(2000);

console.log("\nFinal Account 1");
account1.displayBalance();

console.log("\nFinal Account 2");
account2.displayBalance();
