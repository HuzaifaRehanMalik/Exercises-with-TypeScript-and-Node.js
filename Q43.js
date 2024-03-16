// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
function show_magicians(magician) {
    console.log("Original Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log("".concat(magician_1));
        ;
    }
    console.log("                              ");
    console.log("Great Magicians:");
    for (var _a = 0, magicians_2 = magicians; _a < magicians_2.length; _a++) {
        var magician_2 = magicians_2[_a];
        ;
        console.log("The Great ".concat(magician_2));
    }
}
show_magicians();
