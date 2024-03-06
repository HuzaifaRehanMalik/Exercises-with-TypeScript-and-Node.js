// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestlist = ["Ali", "Alyan", "Huzaifa", "Rehan", "Talha"];
console.log("Great News! I have a new table.");
console.log("Sorry we can Only invite three people for dinner. ");
while (guestlist.length > 3) {
    var removedGuest = guestlist.pop();
    console.log("sorry! ".concat(removedGuest, ", we cannot invite you to dinner"));
}
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("You are still invited to dinner, ".concat(guest, " "));
}
guestlist.splice(0, guestlist.length);
console.log("Empty list", guestlist);
