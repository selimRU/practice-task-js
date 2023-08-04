// function largestNumberSelection(array) {
//     let largestNumber = array[0];
//     for (let i = 0; i < array.length; i++) {
//         let number = array[i];
//         if (number > largestNumber) {
//             largestNumber = number;
//         }
//     }
//     return largestNumber;
// }
// let arr = [2, 11, 5, 1, 7, 9, 3, 42];
// let result = largestNumberSelection(arr);
// console.log(result);
function largestNumberSelection(array) {
    let largestNumber = array[0];
    let i = 0;
    while (i < array.length) {
        let number = array[i];
        if (number > largestNumber) {
            largestNumber = number;
        }
        i++
    }
    return largestNumber;
}
let arr = [2, 11, 5, 1, 7, 9, 3, 42];
let result = largestNumberSelection(arr);
console.log(result);