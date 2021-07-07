/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const formatter = (value) => {
  let formattedValue = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(value);
  return formattedValue;
};

const tipCalculator = (sum, percentage = 18, currency = "$") => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(sum)}
      Tip percentage: ${formatter(percentage)}%
      Tip:            ${formatter(tip.toFixed(2))}
      Total:          ${formatter(total.toFixed(2))}
    `);
};

tipCalculator(29.95, 18, "$");
