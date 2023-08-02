// function largestString(array) {
//     var largestWord = '';
//     for (let i = 0; i < array.length; i++) {
//         var name = array[i];
//         if(name.length > largestWord.length){
//             largestWord = name;
//         }

//     }
//     return largestWord
// }
// var result = largestString(['selim', 'salam', 'mehjabin', 'soha', 'mim'])
// console.log(result);

// function primeNumber(a) {
//     if (a % 2 === 0 || a % 3 === 0) {
//         return 'not prime number';
//     }

//     else if(a % 2 !== 0 || a % 3 !== 0){
//         return 'prime number';
//     }

// }
// var number = 7;
// console.log(primeNumber(number));

// function reverseString(a){
//     var revrse = a.split('').reverse().join('');
//     return revrse;
// }
// var originalString = 'selim';
// console.log(reverseString(originalString));

// function sumAndAvarage(array) {
//     var sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         var number = array[i];
//         sum = sum + number;
//         var avarage = sum / array.length;
//     }
//     return { sum, avarage };
// }
// var arr = [10, 20, 15, 25, 35, 40]
// var result = sumAndAvarage(arr)
// console.log(result.sum);
// console.log(result.avarage);

// function str(a){
// var final = a.toUpperCase()
// return final
// }
// console.log(str('selim'));

// function leapYear(year) {

//     if (year % 4 === 0) {
//         return 'leap year';
//     }
//     else {
//         return 'Not Leap Year';
//     }
// }
// console.log(leapYear(2020));

