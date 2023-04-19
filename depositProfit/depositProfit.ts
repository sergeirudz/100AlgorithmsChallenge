/* 

You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.
*/

export function depositProfit(
  deposit: number,
  rate: number,
  threshold: number
): number {
  let year = 0;
  let account = deposit;

  while (threshold > account) {
    account += account * (rate / 100); // multiply by 20%
    year++; // add 1 year
  }

  return year;
}

// console.log(depositProfit(100, 20, 170))
