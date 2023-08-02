// function leapYear(years) {
//     let totalLeapYears = [];
//     for (let i = 0; i < years.length; i++) {
//         var year = years[i]
//         if (year % 4 === 0) {
//             totalLeapYears.push(year)
//         }
//     }
//     return totalLeapYears;
// }
// var years = [2023, 2024, 2025, 2028, 2030];
// var result = leapYear(years)
// console.log(result);

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var inch = 144;
var result = inchToFeet(inch);
console.log(result);