/* Implement a function that takes an array and some other arguments then removes the
other arguments from that array:
removefromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

Hints
The first test on this is fairly easy (remove a single item from an array) but the others
require more thought/research.

- you can manipulate the original array you pass into the function call or create a
new array that is returned as the result.
- how to remove a single element from an array.
- how to deal with multiple optional arguments in a javascript function.
*/

const removeFromArray = function(origArray, ...args) { // pass the original given array and then pass ...args (which means "any number of values") this is how I get multple optional arguments or get multiple values to pass.
    const newArray = [] // create a new array that I will use to return results.
    origArray.forEach(items => { // use forEach to iterate through the original given array. Items represents each element within the array. The for loop equivalent: (let i = 0; i < origArray.length; i++).
        if (!args.includes(items)) { // if the optional multiple arguments are not included in origArray 
            newArray.push(items) // 'push' them into newArray.
        }
    }); 
    return newArray // returns new Arrar with the optional values removed.
        
};

// console.log(removeFromArray([1,2,3,4],1,2)) // removes values '1', and '2'. Prints an output of: 3, 4.
// Do not edit below this line
module.exports = removeFromArray;
