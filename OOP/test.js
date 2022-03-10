function bonAppetit(bill, k, b) {
bill.splice(k,1);
let sum = 0;
for (let i =0; i< bill.length;i++) {
    sum+=bill[i];
}
if (sum/2 == b) {
    return "Bon Appetit";
} else return b-sum/2;
}

console.log(bonAppetit([3,10,2,9],2,12));