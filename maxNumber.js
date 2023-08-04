// function maxNumber(num1,num2,num3) {
//     let max = Math.max(num1,num2,num3);
//     return max;
// }
// let result = maxNumber(34, 56, 87);
// console.log(result);
// function minNumber(num1, num2, num3) {
//     let min = Math.min(num1, num2, num3);
//     return min;
// }

// let result = minNumber(34, 56, 87);
// console.log(result);
let num1 = 34;
let num2 = 56;
let num3 = 87;

if (num1 > num2 && num1 > num3) {
    console.log('num1 is senior');
}
else if (num2 > num1 && num2 > num3) {
    console.log('num2 is senior');
}
else {
    console.log('num3 is senior');
}