var TAX_RATE = 0.08 // 8% Sales tax

var amount = 99.99;

amount = amount * 2;

amount = amount + (amount * TAX_RATE);

console.log(amount); // 215.9784

console.log(amount.toFixed( 2 )); // "215.98"

// as of ES6
const TAX_RATE_ES6 = 0.08;
