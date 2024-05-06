const name = "sam"
const splitName = name.split("")
// console.log(splitName);
const reverseName = splitName.reverse()
// console.log(reverseName);
const result = reverseName.join("")
// console.log(result);

function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
}

console.log(reverseString);