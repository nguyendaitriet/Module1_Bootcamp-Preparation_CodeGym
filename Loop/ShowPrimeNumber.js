let num = 9;
let count = 1;
let n = 2;
while (count <= num) {
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

    let dem = 0;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            dem = 1;
            break;
        }
    }
    if (dem == 0) {
        console.log(n);
        count++;
    }
    n++;
}