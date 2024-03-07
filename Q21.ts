// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let students:{ Name:string,Class:number,Grade:string}[]=[
    { Name: "Ali" , Class:10, Grade:"A+"},
    { Name: "Huzaifa" , Class:9, Grade:"A"},
    { Name: "Alyan" , Class:5, Grade:"b"}
]
console.log("Information about students");
for(let student of students){
    console.log("studentName:",student.Name);
    console.log("CLass:",student.Class);
    console.log("Grade:",student.Grade);
    console.log("_________________________");
}
