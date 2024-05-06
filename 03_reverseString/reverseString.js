const word = "" // create variable - empty string
const stringWord = word.toString(); // convert all characters (numbers + punctuation) into a string
const splitWord = stringWord.split("") // split our string into an array of letters
const reverseWord = splitWord.reverse() // reverse order of items in our array
const result = reverseWord.join("") // join the items in our array back into a string

function reverseString(str) { // chanin methods together to a nice function
    return str
        .split("")
        .reverse()
        .join("")

}

// Do not edit below this line
module.exports = reverseString;
