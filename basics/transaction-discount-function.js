function getDiscountRate(total) {
    if (total >= 1000000) {
        return 0.20;
    } else if (total >= 500000) {
        return 0.10;
    } else if (total >= 250000) {
        return 0.05;
    } else {
        return 0;
    }
}

let transactions = [150000, 275000, 500000, 1250000];

for (let i = 0; i < transactions.length; i++) {
    let total = transactions[i];
    let discountRate = getDiscountRate(total);
    let discountAmount = total * discountRate;
    let pay = total - discountAmount;

    console.log("Transaction " + (i + 1));
    console.log("Total:", total);
    console.log("Discount:", discountRate * 100 + "%");
    console.log("Pay:", pay);
    console.log("-------------------");
}
