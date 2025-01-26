//Task 1 -Store Inventory
let products = ["Newport", "Kool", "Clipper", "Salem", "Westport"];

products.push("Winston"); // Add a new product
products.pop(); // Remove the last product

console.log("Updated Product List:", products);

//Task 2 - Student Scores
let scores = [80, 76, 99, 84, 100];
scores[1] = 94;
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
console.log("Updated Scores:", scores);
console.log("Average Score:", average);

//Task 3 - Employee Records
let employee = { name: "Helen", age: 20, department: "Sales", isActive: false }
employee.department = "Marketing";
employee.position = "Manager";
console.log("Updated employee:", employee);

//Task 4 - Customer Database
let customers = [{ name: "Kelsey Khong", email: "Kelseykhong@gmail.com", purchaseAmount: 222 },
    { name: 'Hai Tran', email: 'Haitran@gmail.com', purchaseAmount: 111 },
    { name: 'Rei Nguyen', email: 'Vyem2005@gmail.com', purchaseAmount: 90 }];
    customers.push({ name: 'Anna Nguyen', email: 'annanguyen12@gmail.com', purchaseAmount: 50 });
    console.log("Customer List:", customers);

    //Task 5 - Order Processing System
let order = { orderId: "OR3456", customerName: 'Rei Nguyen', amount: 90 }
order.calculateTax = function () { return this.amount * 0.1; }
console.log("Order Details:",order.orderId, order.customerName, order.amount, order.calculateTax());
//DONE