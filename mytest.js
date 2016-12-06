// // For this challenge, we are interested in finding the credit card number whose digits sum to
// // the largest number. If more than one has the same largest sum of digits, we want the last
// // one in the list with that sum. Write a single function that takes one argument. That argument will be an
// // array  of credit card numbers. Assume the array can have any number of credit card numbers and each one is
// // a string of digits and dashes. Your function should return the credit card number that has the largest sum
// // of digits.
// //
// // Here is a sample array of credit card numbers:
// // ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260']
// //
// // In the sample array above, the digits add up to 49, 81, 81, and 64 respectively. Since there are two which
// // have the same sum, the function should return the last one with that sum, in this case '4252-278893-7978'
// // Things to accomplish:
// //
// // Contain all variables and code needed within a function.
// // Have that function take one argument which will be an array of credit card number strings.
// // Determine the sum of digits for each credit card number.
// // Determine which credit card number has the last largest sum of digits.
// // Use a return statement to return the required card number in its’ original form.
//parseInt,

var ccNos = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260', '4251-278895-7977'];
var temp = ['10', '20', '30'];

function largestCardNum(array) {
    var sum = 0;
    var arr = [];
    var biggestNum = 0;
    var cardNum = 0;
    for (var i = 0; i < array.length; i++) {
        console.log('I', i);
        for (var j = 0; j < array[i].length; j++) {
          var count = 0;
            console.log('J', j);
            if (array[i][j] !== '-') {
              cardNum += array[i][j];
                sum += parseInt(array[i][j]);
                console.log('total',sum);
                  console.log('card number',cardNum);


            }
            if (sum >= biggestNum) {
                biggestNum = sum;

                console.log('bignum',biggestNum);
              arr.push(arr[count]= biggestNum);
              count ++;
sum = 0;
            }

console.log(sum);

        }
    }return arr;
}


console.log(largestCardNum(temp));
