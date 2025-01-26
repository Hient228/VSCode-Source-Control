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