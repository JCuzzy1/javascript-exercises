/* Write a function that simply repeats the string a given number of times:

repeatString('hey', 3) // returns 'heyheyhey'

This function will take two arguments, string and num.

There are multple tests in this exercise (see file repeatString.spec.js).
Only the first test is currently enabled. So after making sure that this
first one passes, enable the others one by one by deleting the .skip from
the test.skip() function.*/

/* const repeatString = function(string,num) { //two arguments: string and num
    return string.repeat(num) //return string a given number of times

};

// Do not edit below this line
module.exports = repeatString; */

/* First test (above) passed.

Second test: Repeat 'hello' 10 times.
Third test: Repeat 'hi' 1 time.
Fourth test: Repeat 'bye' 0 times.
Fifth test: Repeat 'goodbye' -1 times - expected to return an error. */


const repeatString = function(string,num) { 
    let repeatedString = ""; // create a variable (an empty string) to hold the string I'm going to return.
    if(num < 0) {
        return 'ERROR';
    }
    for(let i = 0; i < num; i++) { // create a loop that repeats the given number of times: initialise: index starting at zero; condition: as long as i is less than the number or iterations; final-expression: increment the value by 1.
        repeatedString = repeatedString + string //add the given string to the result on each loop.
    }

    return repeatedString;

};

// console.log(repeatString(repeatedString, num));

// Do not edit below this line
module.exports = repeatString;
