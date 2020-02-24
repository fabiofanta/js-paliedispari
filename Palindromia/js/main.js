/*
 */
function reverseString(str) {
    var splitString = str.split("");
    console.log(splitString);
    var newstr = str.split("").slice()
    console.log(newstr);
    var reverseArray = newstr.reverse();
    console.log(reverseArray);
    var regular = splitString.join("");
    console.log(regular);
    var reverse = reverseArray.join("");
    console.log(reverse);

    if (regular == reverse) {
        return true;
    } else {
        return false
    }

}

    var result = reverseString("yamamay");
    console.log(result);
