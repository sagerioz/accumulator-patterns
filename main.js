/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
    var string = "This Works!";
    return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/


function sum(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        count += arr[i];
    }
    return count;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/



function doubleNumbers(input) {
    var dbled = [];
    for (var i = 0; i < input.length; i++) {
        dbled.push(input[i] * 2);
    }

    return dbled;

}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers(arr, multiplier) {
    var multipliedOut = [];
    for (var i = 0; i < arr.length; i++) {
        multipliedOut.push(arr[i] * multiplier);
    }



    return multipliedOut;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/
//pit index[i] in a variable to hold it within loops

function doubleLetters(input) {
    var dbled = '';
    var inputString = input.split('');
    for (var i = 0; i < inputString.length; i++) {
        dbled += (inputString[i] + inputString[i]);
    }

    return dbled;

}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/



function interleave(arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i], arr2[i]);
    }

    return arr3;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(num, value) {
    var endArr = [];
    for (var i = 0; i < num; i++) {
        endArr.push(value);
    }
    return endArr;

}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(array) {
    var flipObj = new Object;
    for (var i = 0; i < array.length; i++) {
        flipObj[array[i]] = i;
    }
    return flipObj;
}
//var test={}
// test.quick=0;
// test['quick']=0




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

function arraysToObject(arr) {
    var newObj = {};
    for (var i = 0; i < arr.length; i++) {
        newObj[arr[i][0]] = arr[i][1];
    }
    return newObj;
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/




function reverseString(string) {
    var newStr = [];
    for (var i = 0; i <= string.length; i++) {
        newStr.push(string.charAt(string.length - i));

    }
    return newStr.join('');
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/
function repeats(string) {
    var array = string.split("");
    var leftHalf = array.slice(0, (array.length / 2));
    var rightHalf = array.slice((array.length / 2), array.length);

    if (string.length % 2 !== 0)
        return false;

    for (var i = 0; i < leftHalf.length; i++) {
        if (leftHalf[i] !== rightHalf[i]) {
            return false;
        }
    }
    return true;
}
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/


function everyOther(string) {
    var strEveryOther = '';
    for (var i = 0; i < string.length; i += 2) {
        strEveryOther += string[i]
    }
    return strEveryOther;

}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual(string) {
    var array = string.split("");
    var arr1 = array
    var arr2 = array
    for (var i = 0; i < array.length; i++) {
        if (arr1[i] !== arr2[i + 1]) {

            return false;
        } else if (arr1[i] === arr2[i + 1]) {
            return true;
        }
    }
    return true;

}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/
function sumLetters(string) {
    var total = 0;
    var stringSum = string.split('');
    for (var i = 0; i < stringSum.length; i++) {
        total += parseInt(stringSum[i]);

    }
    return total;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(string) {
    var string1 = string.split('');
    var count = 0;

    for (var i = 0; i < string1.length; i++) {
        if (string1[i] === "a") {
            count += 1;
        } else if (string1[i] === "e") {
            count += 1;
        } else if (string1[i] === "i") {
            count += 1;
        } else if (string1[i] === "o") {
            count += 1;
        } else if (string1[i] === "u") {
            count += 1;
        }
    }
    return count;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/
function split(string) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }

    return arr;
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(string) {
    var arr = [];
    for (var i = 0; i < string.length; i++) {
        arr.push(string.codePointAt(i));
    }
    return arr;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/
function letterMap(string) {
    var newObj = {};
    var arr = string.split('');
    for (var i = 0; i < arr.length; i++) {
        newObj[arr[i]] = i;
    }
    return newObj;
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(string) {
    var newObj = {};
    var arr = string.split('');
    arr.forEach(function(i) {
        // the right side evaluates first:
        //'if b[i](a for example) exists then increment the value of the key by one.
        //If not assign one to the value and insert the key'
        newObj[i] = newObj[i] + 1 || 1
    })
    return newObj;
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/


function threeOdds(num1, num2) {
    var num3 = (num2 - num1);
    if (num3 >= 6) {
        return true;
    } else if (num3 % 2 === 0 && num1 % 2 === 0) {
        return false;
    } else {
        return false;
    }
}
//
//







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/


function leftPad(str, pad, char) {
    var padStr = '';
    if (str.length >= pad) {
        return str;
    } else {
        for (var i = 0; i < (pad - str.length); i++) {
            padStr += char;
        }

    }
    return padStr += str;
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/


function createString(num, letter) {
    var newString = '';
    for (var i = 0; i < num; i++) {
        newString += letter;
    }
    return newString;
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/


function factorial(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- >= 2) {// why does (num-- > 2) still work

        tmp *= num;
          console.log(num, tmp);
    }
    return tmp;
}

console.log(factorial(5));



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/



function arrayOfNumbers(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/
function evenOdd(num1, num2) {

    var obj = {};
    if (num1 === 0 && num2 === 0) {
        obj = {};
    } else {
        for (var i = num1; i <= num2; i++) {
            if (i % 2 === 0) {
                obj[i] = 'even';
            } else if (i % 2 !== 0) {
                obj[i] = 'odd';

            }
        }
    }
    return obj;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(num, string) {
    var obj = {};
    var x = string;
    if (num === 0) {
        return obj;
    } else {
        for (var i = 0; i < num; i++) {
            obj[x] = true;
            x += string; //
        }

    }
    return obj;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/
var val = 1;
var arr1 = [2,3];
function every(arr, value) { //broken
    if (arr.length == 0) {
        return true
    } else {
        for (var i = 0; i < arr.length; i++) {
          var vote = false;
            if (arr[i] == value) {
              vote = true;
            } else {
              vote = false;
              return vote;
            }
        }
    }return vote;
}
console.log(every(arr1,val));




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

var arr1 = [2,3];
function some(arr, val) {
  var value = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            value = true;
            return value;
        } else {
            value = false;
        }
    }return value;
}

//console.log(some(arr1, 23));



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/
function toSentence(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        if (i < arr.length - 2) {
            str += arr[i] + ', '
          } else if (i < arr.length - 1) {
              str += arr[i];
        } else {
            str += ' and ' + arr[i];
        }
    }
    return str;
}

//console.log('TO SENTENCE', toSentence(["Sue", "Will", "Rachel"]));






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/
function acronym(arr){

var strAcroResult = '';
for (var i = 0; i < arr.length; i++) {
  var str = arr[i];
 for (var j=0; j < 1; j++){//loop thru the item, but technically isn't a loop anymore??
 //strAcroResult += (str.length - (str.length -1));
strAcroResult += str.charAt(0);
}
}
return strAcroResult;

}

// function acronym(arr){
// var strAcroResult = [];
// for (var i = 0; i < arr.length; i++) {//loop thru the array
//   var str = arr[i];
// strAcroResult.push(str[0]);
//  //strAcroResult += (str.length - (str.length -1));
//
// }
// var result = strAcroResult.join();
// return  result;
//
//
//
// }

//console.log('ACRONYM', acronym(["Java", "Script", "Object", "Notation"]));



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(arr) {
    var minArr = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minArr) {
            minArr = arr[i];
        }
    }
    return minArr;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

function index(arr, name) {//broken
    var obj = {};
    for (var i = 0; i < arr.length; i++) {

        obj[[name]] = arr[i];


    }
    return obj;

}
console.log('INDEX', index([{
    id: 1,
    name: "Joe"
}, {
    id: 2,
    name: "Sue"
}], 'name'));






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/
function invert(obj) {
    var newObj = {};
    for (var prop in obj) {
        newObj[obj[prop]] = prop;
    }
    return newObj;

}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name, anObj) { //there was an error in assignment; testing will pass name first and then obj!!
    var obj = {};
    for (var i in anObj) {
        var key = i;
        i += '-signed';
        obj[i] = anObj[key] + (' - ' + name);
    }
    console.log(obj);
    return (obj);
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

function pairs(obj) {
    var arr = [];
    for (var i in obj) {
        arr.push(i + ' - ' + obj[i]);
        //console.log(i);
    }

    return arr;
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(obj) {
    var sum = 0;
    for (var prop in obj) {
        sum += obj[[prop]];
    }
    return sum;

}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/


function biggestProperty(obj) {
    var arr = [];
    for (var prop in obj) {
        arr.push(prop);
        //console.log(arr);
    }
    var maxVal = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;



}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/
var myObj = {
    1999: 4036,
    2000: 7654
};
var myVar = 4036;

function keyForValue(obj, variable) {
    var keyOfProp = 0;
    for (x in obj) {
        console.log(obj[x]);
        if (obj[x] == '') {
            keyOfProp = undefined;
            return keyOfProp;
        } else if (obj[x] == variable) {
            keyOfProp = x;
            return keyOfProp;
        }else{
          keyOfProp = undefined;
          return keyOfProp;
        }

return keyOfProp;
    }
};
console.log(keyForValue(myObj, myVar));
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/
// var myObj = {1999: 4036, 2000: 7654};
// var myVar = 4036;
function containsValue(obj, variable) {
  var myVal = false;

for(prop in obj){


            if (obj[prop] == variable) {
                console.log('YESValue:', obj[prop], variable);
            myVal = true;
            return myVal;
          } else if (obj[prop] == ''){
            myVal = false;
          }else if (obj[prop] !== variable){
            console.log('NOValue:', obj[prop], variable);
          myVal = false;
        }
    }return myVal;



};
//console.log(containsValue(myObj,myVar));








//
