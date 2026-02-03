const expenses = [50000, 75000, 30000, 120000];

// 1. Menghitung Total dengan perulangan for
let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

// 2. Menghitung Rata-rata
const average = total / expenses.length;

// 3. Mencari nilai di atas rata-rata dengan for
let aboveAverage = [];
for (let i = 0; i < expenses.length; i++) {
    if (expenses[i] > average) {
        aboveAverage.push(expenses[i]);
    }
}

// --- MENAMPILKAN OUTPUT ---

console.log("Daily Expenses:");
for (let i = 0; i < expenses.length; i++) {
    console.log("- " + expenses[i]);
}

console.log("\nTotal: " + total);
console.log("Average: " + average);

console.log("\nExpenses above average:");
for (let i = 0; i < aboveAverage.length; i++) {
    console.log("- " + aboveAverage[i]);
}