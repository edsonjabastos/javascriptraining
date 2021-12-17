const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// #3 Recursividade

function somarArray(array, total = 0) {
  if (array.length === 0) {
    return total;
  }
  return somarArray(array.slice(1), total + array[0]);
}

const r1 = somarArray(nums);

console.log(r1);

// #2 Reduce - método mais declarativo!
// const somar = (a, b) => a + b;
// const total = nums.reduce(somar);

// console.log(total );

// ########################################

// #1 - dados mutáveis!
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   total += nums[i];
// }

// console.log(total);
