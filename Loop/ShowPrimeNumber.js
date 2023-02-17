// let num = 9;
// let count = 1;
// let n = 2;
// while (count <= num) {
    // let dem = 0;
    // let i = 2;
    // while (i < n) {
    //     if (n % i == 0) {
    //         dem = 1;
    //         break;
    //     }
    // }
    // if (dem == 0) {
    //     console.log(n);
    //     count++;
    // }

//     let dem = 0;
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             dem = 1;
//             break;
//         }
//     }
//     if (dem == 0) {
//         console.log(n);
//         count++;
//     }
//     n++;
// }

// function fibonacci(n) {
//     let fibArray = [0, 1];
//             let fib = 0;
//             let x1 = 0;
//             let x2 = 1;
//             for (let i = 1; i <= n; i++) {
//                 fib = x1 + x2;
//                 fibArray.push(fib);
//                 x1 = x2;
//                 x2 = fib;
//             }
// console.log(fibArray);
// console.log(fibArray[n]);
// }

// fibonacci(7);

let str = '1298';
let strArr =  str.split('');
console.log(strArr);
let allTwoDigitsNums = [];
for (let i = 0; i < strArr.length - 1; i++) {
    allTwoDigitsNums.push(Number(strArr[i] + strArr[i + 1]))
}
console.log(allTwoDigitsNums);
console.log('Index: ', str.indexOf(Math.max(...allTwoDigitsNums)) + 1)