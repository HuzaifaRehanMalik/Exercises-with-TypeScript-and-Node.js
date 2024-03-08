// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
var nameOfStudent = "Huzaifa";
console.log("Is nameOfStudent equal Huzaifa? I peridict true");
console.log(nameOfStudent == "Huzaifa");
console.log("is nameOfStudent inequal Ali? I peridict true");
console.log(nameOfStudent != "Ali");
// • Tests using the lower case function
var country = "Pakistan";
console.log("Is country.tolowercase equal pakistan? I peridict true");
console.log(country.toLocaleLowerCase() == "pakistan");
console.log("Is country.tolowercase equal india? I peridict true");
console.log(country.toLocaleLowerCase() == "india");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var x = 10;
var y = 5;
console.log("Is x greater than y? I predict True.");
console.log(x > y);
console.log("Is x less than or equal to y? I predict False.");
console.log(x <= y);
// • Tests using "and" and "or" operators
var age = 20;
console.log("Is age greater than 15 and less than 25? I predict True.");
console.log(age > 15 && age < 25);
console.log("Is age less than 15 or greater than 50? I predict False.");
console.log(age < 15 || age > 50);
// • Test whether an item is in a array
// • Test whether an item is not in a array
var fruits = ["apple", "banana", "orange"];
console.log("Is 'apple' in the array? I predict True.");
console.log(fruits.includes("apple"));
console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.includes("grape"));
