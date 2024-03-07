// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var students = [
    { Name: "Ali", Class: 10, Grade: "A+" },
    { Name: "Huzaifa", Class: 9, Grade: "A" },
    { Name: "Alyan", Class: 5, Grade: "b" }
];
console.log("Information about students");
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    console.log("studentName:", student.Name);
    console.log("CLass:", student.Class);
    console.log("Grade:", student.Grade);
    console.log("_________________________");
}
