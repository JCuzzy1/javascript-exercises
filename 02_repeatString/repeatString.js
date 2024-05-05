/* Write a function that simply repeats the string a given number of times:

repeatString('hey', 3) // returns 'heyheyhey'

This function will take two arguments, string and num.

There are multple tests in this exercise (see file repeatString.spec.js).
Only the first test is currently enabled. So after making sure that this
first one passes, enable the others one by one by deleting the .skip from
the test.skip() function. */

const repeatString = function(string,num) {
    return string.repeat(num)

};

// Do not edit below this line
module.exports = repeatString;
