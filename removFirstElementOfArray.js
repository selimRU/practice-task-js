// var a = [1,2,3,4,5,6,7,8,9]
// a.shift()
// console.log(a);


// birbii part
// var a = ['selim', 'salam','soha', 'saihan', 'mim', 'ehan']
// for(var i = 0; i < a.length; i++){
//     if((a[i].length % 2) === 0){
//         console.log('Hi Birbe');
//     }
//     else {
//         console.log('not birbe');
//     }
// }


// numbers part
// const length = 4;
// const numbers = [];

// for(var i = 0; i < length; i++){
//     numbers.push (i + 1);
    
// }

// console.log(numbers); // 0 index + 1 = [1]
//                       // 1 index + 1 = [1,2]
//                       // 2 insex + 1 = [1,2,3]
//                       // 3 index + 1 = [1,2,3,4]
//                       //numbers = [1,2,3,4]

var a = [1,2,3,4,5,6,7,8];
var total = 0;
for(let i = 0; i < a.length; i++){
    total = total + a[i];
    console.log(total,i);
}