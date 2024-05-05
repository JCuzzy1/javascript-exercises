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
    let repeatedString = "";
    if(num < 0) {
        return 'ERROR';
    }
    for(let i = 0; i < num; i++) {
        repeatedString += string; // repeatedString = repeatedString + string
    }

    return repeatedString;

};

// console.log(repeatString(repeatedString, num));

// Do not edit below this line
module.exports = repeatString;
