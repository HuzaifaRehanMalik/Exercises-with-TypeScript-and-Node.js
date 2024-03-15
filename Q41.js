// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
function show_magicians(magician) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log("".concat(magician_1));
    }
}
show_magicians();
