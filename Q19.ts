// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guest_list : string[] = ["Ali","Alyan","Huzaifa","Talha","Taha"]
console.log(`Number of guest are ${guest_list.length}`);
console.log("Great News! I have a new table.");
console.log("Sorry we can Only invite three people for dinner. ");

while(guest_list.length>3){
    let removedGuest=guest_list.pop()
    console.log(`Sorry! ${removedGuest} we cannot invite you. ` );
}
for (let guest of guest_list){
    console.log(`you are still invited ${guest}`);
}
guest_list.splice(0,guest_list.length);
console.log("Empty list",guest_list);


 