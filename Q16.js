// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestlist = ["Ali", "Alyan", "Talha"];
var unableToCome = "Talha";
guestlist = guestlist.filter(function (guest) { return guest !== unableToCome; });
guestlist.push("Taha");
guestlist.unshift("Zain");
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Zara");
console.log("Great News! I have a new Table ");
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("I would be happy if you join us for luch ".concat(guest));
}
