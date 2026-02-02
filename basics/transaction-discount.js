let transactions = [150000, 275000, 500000, 1250000];

for (let i = 0; i < transactions.length; i++) {
    let totalExpenditure = transactions[i];
    let discount = 0;

    if (totalExpenditure >= 1000000) {
        discount = 0.20;
    } else if (totalExpenditure >= 500000) {
        discount = 0.10;
    } else if (totalExpenditure >= 250000) {
        discount = 0.05;
    } else {
        discount = 0;
    }

    let discountedAmount = totalExpenditure * discount;
    let totalPay = totalExpenditure - discountedAmount;

    console.log("Transaction " + (i + 1));
    console.log("Total:", totalExpenditure);
    console.log("Discount:", discount * 100 + "%");
    console.log("Pay:", totalPay);
    console.log("-------------------");
}
