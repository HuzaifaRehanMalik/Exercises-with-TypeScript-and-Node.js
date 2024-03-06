// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guest_list = ["Ali", "Alyan", "Huzaifa", "Talha", "Taha"];
console.log("Number of guest are ".concat(guest_list.length));
console.log("Great News! I have a new table.");
console.log("Sorry we can Only invite three people for dinner. ");
while (guest_list.length > 3) {
    var removedGuest = guest_list.pop();
    console.log("Sorry! ".concat(removedGuest, " we cannot invite you. "));
}
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guest = guest_list_1[_i];
    console.log("you are still invited ".concat(guest));
}
guest_list.splice(0, guest_list.length);
console.log("Empty list", guest_list);
