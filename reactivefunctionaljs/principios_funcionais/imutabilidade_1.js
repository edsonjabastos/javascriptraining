function ordenar(array) {
  return [...array].sort((a, b) => a - b);
}

const nums = Object.freeze([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

const numOrdenados = ordenar(nums);

console.log(nums, numOrdenados);

const parteNums = nums.slice(5);

console.log(nums, parteNums);
