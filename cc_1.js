//Task 1
let employeeName = "Hien Tran";
const employeeID = 3713;
var isActive = true;

console.log("Employee Name:", employeeName, "Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "Type:", typeof employeeID);
console.log("Is Active:", isActive, "Type:", typeof isActive);

//Task 2
let productName = "Owala water bottle";
const productPrice = 30.00;
var isAvailable = true;

console.log("Product Name:", productName, "Type:", typeof productName);
console.log("Product Price:", productPrice, "Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable);

//Task 3
let accountBalance = 700;

accountBalance += 300; // Adding
console.log("After deposit:", accountBalance);

accountBalance -= 100; // Subtract 
console.log("After withdrawal:", accountBalance);

accountBalance *= 1.05; // 5% interest
console.log("After interest:", accountBalance);

accountBalance /= 2; // Dividing
console.log("After split:", accountBalance);

//Task 4
let customerName = "Kayla";

let welcomeMessage = "Dear Sir/Madam, " + customerName + "! Thank You For Your Owala Order.";
console.log(welcomeMessage);

//Task 5
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Access granted. Welcome back!");
} else {
    console.log("Access denied. Please log in.");
}

let hasAccess = isLoggedIn && true; // Example of a logical operation
console.log("Has Access:", hasAccess);