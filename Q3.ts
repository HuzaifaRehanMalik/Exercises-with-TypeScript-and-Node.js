// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let name1:string="Hellow eric"

console.log("lowerCase:",name1.toLocaleLowerCase());

console.log("UpperCase:",name1.toLocaleUpperCase());

console.log("Titlecase:", name1.replace(/\b\e/g, c => c.toUpperCase()));
