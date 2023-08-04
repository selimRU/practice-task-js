// function objectLargestPrice(elements) {
//     let largestPrice = 0;
//     for (const element in elements) {
//         const elementValue = elements[element]
//         if (elementValue > largestPrice) {
//             largestPrice = elementValue;
//         }
//     }
//     return largestPrice;
// }
// let obj = {
//     price1: 1000,
//     price2: 5000,
//     price3: 8000,
// }
// let result = objectLargestPrice(obj);
// console.log(result);

// function make_avg(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let number = arr[i];
//         sum += number;
//         var avarage = sum / arr.length;
//     }
//     return avarage
// }

// let array = [1, 4, 6, 8, 33, 99, 88, 23];
// let result = make_avg(array);
// console.log(result);
// function make_avg(arr, length) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let number = arr[i];
//         sum += number;
//         var avarage = sum / length;
//     }
//     return avarage
// }

// let array = [1, 4, 6, 8, 33, 99, 88, 23];
// let length = array.length;
// let result = make_avg(array, length);
// console.log(result);