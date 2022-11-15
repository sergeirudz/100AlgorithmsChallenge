// function that adds two digits
export function addTwoDigits(n: number): number {
  const nums = n.toString().split('');
  console.log(nums);
  //   return nums.reduce((a: string, b: string) => parseInt(a) + parseInt(b));
  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));
