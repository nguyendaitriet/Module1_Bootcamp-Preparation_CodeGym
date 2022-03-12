function processMatrix(size) {

    //Tạo ra một ma trận 2 chiều n x n được nhập vào từ bàn phím, gồm các giá trị số nguyên được sinh ngẫu nhiên từ 10 đến 90 
    //và hiển thị ma trận  
    let matrix = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let i = 0; i < size; i++) {
            row[i] = Math.floor(Math.random() * (90 - 10 + 1) + 10);
        }
        matrix[i] = row;
    }
    console.log(matrix);

    // 1. Tính tổng các số chẵn trong ma trận.
    let evenNumbers = 0;
    for (let row of matrix) {
        for (let number of row) {
            if (number % 2 == 0) {
                evenNumbers++;
            }
        }
    }
    console.log(`There is/are ${evenNumbers} in the matrix.`);

    // 2. Tính tổng các giá trị trên đường chéo chính
    let sumMainDiagonal = 0;
    for (let i in matrix) {
        sumMainDiagonal += matrix[i][i];
    }
    console.log(`Sum of main diagonal elements in the Matrix is ${sumMainDiagonal}`);

    // 3. Tính tổng các giá trị trên đường chéo phụ
    let sumSubDiagonal = 0;
    for (let i in matrix) {
        sumSubDiagonal += matrix[i][matrix.length-1-i];
    }
    console.log(`Sum of sub diagonal elements in the Matrix is ${sumSubDiagonal}`);

    // 4. Tính tổng các giá trị trên đường biên
    let sumBoundaryElemets = 0;
    for (let i in matrix) {
        for (let j in matrix[i]) {
            if (i == 0) {
                sumBoundaryElemets += matrix[i][j];
            } else if (i == size-1) {
                sumBoundaryElemets += matrix[i][j];
            } else if (j == 0) {
                sumBoundaryElemets += matrix[i][j];
            } else if (j == size-1) {
                sumBoundaryElemets += matrix[i][j];
            } 
        }
    }
    console.log(`Sum of boundary elements in the Matrix is ${sumBoundaryElemets}`);

    // 6. Hiển trị ma trận tam giác dưới
    let arr1=[...matrix];
    for (let i in arr1) {
        for (let j in arr1[i]) {
            if (i<j) {
                arr1[i][j] = 0;
            }
        }
    }
    console.log(`Lower triangular matrix:`);
    console.log(arr1);

    // 7. Hiển trị ma trận tam giác trên
    let arr2=[...matrix];
    for (let i in arr2) {
        for (let j in arr2[i]) {
            if (i>j) {
                arr2[i][j] = 0;
            }
        }
    }
    console.log(`Upper triangular matrix:`);
    console.log(arr2);
}


processMatrix(4);