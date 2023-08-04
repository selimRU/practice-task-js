// function onlyPositiveNumber(numbers) {
//     var positiveNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         var number = numbers[i];
//         if (number >= 0) {
//             positiveNumbers.push(number)
//         }
//     }
//     return positiveNumbers;
// }
// var numbers = [10, 23, 45, 22, 8, -9, -55, -26, -67];
// var result = onlyPositiveNumber(numbers);
// console.log(result);

function onlyPositiveNumber(numbers) {
    var positiveNumbers = [];
    let i = 0;
    while (i < numbers.length) {
        var number = numbers[i];
        if (number >= 0) {
            positiveNumbers.push(number)
        }
        i++;
    }
    
    return positiveNumbers;
}
var numbers = [10, 23, 45, 22, 8, -9, -55, -26, -67];
var result = onlyPositiveNumber(numbers);
console.log(result);