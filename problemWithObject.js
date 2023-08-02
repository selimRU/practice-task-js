// function foo(){
// console.log('foo');
// console.log(bar());
// }
// foo()


// function bar(){
// console.log('bar');
// }
// bar()

// function make_avg(num1, num2, num3) {
//     var avarage = (num1 + num2 + num3) / 3;
//     return avarage;
// }

// var finalResult = make_avg(20, 30, 40);
// console.log(finalResult);


//way-1
// function odd_even(number) {
//     if (number % 2 === 0) {
//         console.log('even');
//     }
//     else {
//         console.log('odd');
//     }
// }
//  var result = odd_even(60)
//  var number = 60;
// switch(number){
//     case 41:
//         console.log('odd');
//         break;
//     case 51:
//         console.log('odd');
//         break;
//     case 63:
//         console.log('even');
//         break;
//     case 61:
//         console.log('odd');
//         break;
//         default:
//             console.log('kuhje paini');
// }
//ways of getting property value in 3 ways

//(1)object Name.property name
//(2)object name['property name']
//(3)propertyName = 'property',console.log(object[propertyName])

// function mindGame(a){
//     var multiplication = a * 3;
//     var add = multiplication + 10;
//     var divided = add / 2;
//     var substrition = divided - 5;
//     return substrition;
// }
// var number = mindGame(5);
// console.log(number);

// function evenOdd(name) {

//     if (name.length % 2 === 0) {
//         return 'even';
//     }
//     else {
//         return 'odd'
//     }

// }
// var givenName = 'selim';
// var result = evenOdd(givenName);
// console.log(result);

// function isLGSeven(a) {
//     var substrition = a - 7;
//     if (substrition < 7){
//         return a
//     }
//     else if(substrition > 7){
//         var double = a * 2;
//         return double
//     }
// }
// var number = isLGSeven(10)
// console.log(number);

// function findingBadData(array) {
//     var badData = [];
//     for (var i = 0; i < array.length; i++) {
//         var age = array[i]
//         if (age < 0) {
//             badData.push(age)
//         }
//     }
//     return badData;
// }
// var ages = [12, 11, -24, -44, 20, -7];
// var result = findingBadData(ages);
// console.log(result);

// function gemsToDiamond(a, b, c) {
//     var num1 = a * 21;
//     var num2 = b * 32;
//     var num3 = c * 43;
//     var add = num1 + num2 + num3;
//     if (add < 1000 * 2) {
//         return add;
//     }
//     else if (add > 1000 * 2 || add === 1000 * 2) {
//         var substriction = add - 2000;
//         return substriction;
//     }
// }
// var number1 = 12;
// var number2 = 15;
// var number3 = 20;
// var result = gemsToDiamond(number1, number2, number3)
// console.log(result);

// function fizzBuzz() {
//     for (var i = 0; i <= 100; i++) {
//         if (i % 3 === 0) {
//             console.log('Fizz', i);
//         }


//         else {
//             console.log(i);
//         }
//     }

// }
// fizzBuzz()
// function fizzBuzz() {
//     for (var i = 0; i <= 100; i++) {

//         if (i % 5 === 0) {
//             console.log('Buzz', i);
//         }

//         else {
//             console.log(i);
//         }
//     }

// }
// fizzBuzz()

// fizzBuzz()
// function fizzBuzz() {
//     for (var i = 0; i <= 100; i++) {

//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz', i);
//         }

//         else {
//             console.log(i);
//         }
//     }

// }
// fizzBuzz()
