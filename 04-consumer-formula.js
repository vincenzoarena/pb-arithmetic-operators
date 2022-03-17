/**
 * Q9. Calculate the three bills including tips:
 * €22.35 + 10% tip
 * €26.67 + 15% tip
 * €35.92 + 20% tip
 * 
 * ```
 * To calculate the percentage of a number:
 * 
 * 1. divide the percentage amount by 100
 * 2. multiply your number by the result of step 1
 * 
 * For example, the 15% of 30:
 * 
 * - divide 15 by 100: 15 / 100, which gives 0.15
 * - multiply 30 by 0.15: 30 * 0.15
 * ```
 * 
 */

let price01 = 22.35;
let price02 = 26.67;
let price03 = 35.92;
let percent01 = 10;
let percent02 = 15;
let percent03 = 20;

console.log("The first total amount is of €" + (((percent01 / 100) * price01) + price01) + ".");
console.log("The second total amount is of €" + (((percent02 / 100) * price02) + price02) + ".");
console.log("The third total amount is of €" + (((percent03 / 100) * price03) + price03) + ".");

// ✅

/**
 * Solution:
 * The first total amount is of €24.585.
 * The second total amount is of €30.6705.
 * The third total amount is of €43.104.
 * 
 */