// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestlist = ["Ali", "Alyan", "Talha"];
var unableToCome = "Talha";
guestlist = guestlist.filter(function (guest) { return guest !== unableToCome; });
guestlist.push("Taha");
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("I would be happy if you join us for luch ".concat(guest));
}
// let guestlist: string[] = ["Ali", "Alyan", "Talha"];
// let unableToCome: string = "Talha"; // Corrected to string instead of array
// guestlist = guestlist.filter(guest => guest !== unableToCome);
// guestlist.push("Taha"); // Corrected from 'guest.push' to 'guestlist.push'
// for (let guest of guestlist) {
//     console.log(`I would be happy if you join us for lunch, ${guest}.`);
// }
