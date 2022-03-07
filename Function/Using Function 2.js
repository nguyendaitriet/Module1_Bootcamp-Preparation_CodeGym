function bai1(number) {
    return number * number;
}

function bai2_1(r) {
    return 2 * Math.PI * r;
}

function bai2_2(r) {
    return Math.PI * r * r;
}

function bai3(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function bai4(char) {
    if (Number.isInteger(char)) {
        return true;
    } else {
        return false;
    }
}

function bai5(num1, num2, num3) {
    let min;
    num1 < num2 && num1 < num3 ? min = num1 : num2 < num3 ? min = num2 : min = num3;
    return min;
}

function bai6(num) {
    if (num > 0) {
        return true;
    } else if (num < 0) {
        return false;
    } else {
        return 0;
    }
}

function bai7(num1, num2) {
    console.log(num2, num1);
}

function bai8(arr) {
    let first = 0;
    let last = arr.length - 1;
    let hold;
    while (first < last) {
        hold = arr[first];
        arr[first] = arr[last];
        arr[last] = hold;
        first++;
        last--;
    }
    return arr;
}

function bai9(arr, char) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (char == arr[i]) {
            count++;
        }
    }
    if (count == 0) {
        return -1;
    } else {
        return count;
    }
}

console.log("9^2 = " + bai1(9));
console.log("Chu vi hinh tron ban kinh bang 5 la: " + bai2_1(5));
console.log("Dien tich hinh tron ban kinh bang 5 la: " + bai2_2(5));
console.log("9! = " + bai3(9));
console.log("'c' co phai la mot so khong? " + bai4("c"));
console.log("So nho nhat trong ba so -90, 20, -33 la: " + bai5(-90,20,-33));
console.log("-6 co phai la so nguyen duong khong? " + bai6(-6));
console.log("Nhap vao 6, 7 thi ket qua hoan vi la: " + bai7(6,7));
console.log("Nhap vao chuoi sau 1,4,5,'a','d',34,'ps',-9,-3,'fea', ket qua khi dao nguoc chuoi la: " + bai8([1,4,5,'a','d',34,'ps',-9,-3,'fea']));
console.log(bai9(["fe",9,"fd",9,"s","f",0],"t"));
