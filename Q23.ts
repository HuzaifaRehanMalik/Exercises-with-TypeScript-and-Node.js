// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car:string ="subara"
// test:1
console.log("Is car == 'subara'? I perdict True.");
console.log(car=="subara");
// test:2
console.log("Is car == 'toyota'? I perdict False.");
console.log(car=="toyota");
// test:3
console.log("Is car != 'toyota'? I perdict True.");
console.log(car!="toyota");
// test:4
console.log("Is car != 'subara'? I perdict False.");
console.log(car!="subara");
// test:5
console.log("Does car ends with 'ara'? I predict True.");
console.log(car.endsWith("ara"));
// test:6
console.log("Is car.startWith sub? I perdict True.");
console.log(car.startsWith("sub"));
// test:7
console.log("Is car.length > 5? I perdict False.");
console.log(car.length > 5);
// test:8
console.log("Is car.length < 10? I perdict True.");
console.log(car.length < 10);
// test:9
console.log("Is car.toLowerCase == 'subara'? I perdict True.");
console.log(car.toLowerCase()=="subara");
// test:10
console.log("Is car.toLocaleUpperCase == 'SUBARA'? I perdict True.");
console.log(car.toLocaleUpperCase()=="SUBARA");

