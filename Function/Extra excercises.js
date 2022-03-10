function createArray(size, min = 0, max = 10) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}
// console.log(createArray(9));

function checkPrimeNumberInArray(arr) {
    for (let index in arr) {
        let check = true;
        for (let k = 2; k < arr[index]; k++) {
            if (arr[index] % k == 0) {
                check = false;
                break;
            }
        }
        if (check == true) {
            return true;
        }
    }
    return false;
}
// console.log(checkPrimeNumberInArray([4,6,8,10,12,3]));

function calculateSumAll(arr) {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }
    return sum;
}
// console.log(calculateSum([2,3,4]));

function countEvenNumber(arr) {
    let count = 0;
    for (let number of arr) {
        if (number % 2 == 0) {
            count++;
        }
    }
    return count;
}
// console.log(countEvenNumber([2,44,10,5,17,19,6,-15]));
 (function getResult(){
     let newArray = createArray(20,1,100);
     console.log(`Mảng vừa tạo là: [${newArray}]`);
     console.log(`${checkPrimeNumberInArray(newArray) ? 'Có' : 'Không có'} số nguyên tố trong mảng.`);
     console.log(`Tổng tất cả các giá trị trong mảng: ${calculateSumAll(newArray)}`);
     console.log(`Có ${countEvenNumber(newArray)} số chẵn trong mảng.`);
 })()