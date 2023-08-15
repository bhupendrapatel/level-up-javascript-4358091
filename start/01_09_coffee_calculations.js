// Write your code here
const pricePerCoffee = 1.25;

function getTotalBill(array) {
  const totalValue = array.reduce((acc, cur) => acc += cur, 0);

  return `The total bill is $${totalValue * pricePerCoffee}`;
}

console.log(getTotalBill([2, 1, 3, 5]));

console.log(getTotalBill([2, 5, 7, 1, 4]));