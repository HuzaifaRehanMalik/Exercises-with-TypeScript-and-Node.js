// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians:string[]=['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller']
function show_magicians(magician:string){
    console.log("Original Magicians:");
    for(let magician of magicians){
            
            
            console.log(`${magician}`);;
        
    }
    console.log("                              ");
    console.log("Great Magicians:");
    for(let magician of magicians){;
            
         
            
            console.log(`The Great ${magician}`);
        
    }
}
show_magicians()