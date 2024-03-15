// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
function show_magicians(magician) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log("The Great ".concat(magician_1));
    }
}
show_magicians();
