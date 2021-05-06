const arr = new Array()
console.log(arr)
const arr2 = new Array(true, "Junin.", 27, new Array(2, 4, 10))
console.log(arr2)
arr[0] = "Junin."
arr[1] = "Se esforça!"
arr[2] = 777
arr[3] = true
arr[4] = new Array(true, !false, 27, "Cê é bom mesmo!")
console.log(arr)
console.log(arr[4], arr[4][2])
console.log(arr2[3][arr2[3].length - 1])
const arr3 = ["Edson", 77, [7, 0, 8], true]
console.log(arr3)
arr3[4] = "new value!"
console.log(arr3)
arr3[arr3.length] = "new value with length!"
console.log(arr3)
arr3.push("New value with push!")
console.log(arr3)