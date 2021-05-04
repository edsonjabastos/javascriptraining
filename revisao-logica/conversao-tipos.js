let n1 = 10;    //ATENÇÃO + também é usado para concatenar
let n2 = "10";  // -, /, *, % => operam normalmente
let n3 = "123.456" // usa-se o . para separar casas decimais
let n4 = "a1" // parse converte para number e consegue reconhecer numero até um letra ou char special
let n5 = "1a"
let n6 = "89888889feseg76767"
let n7 = 14.92
let n8 = 1492
let n9 = "452.52"
let n10 = "45252"
let n11 = 4745434976321
n2 = parseInt(n2);
n3 = parseInt(n3);
console.log(typeof n3, n3) // parseInt e parseFloat leem todos characeres até o ultimo numero
n3 = parseFloat(n3);
n4 = parseInt(n4);
console.log(n4);
n5 = parseInt(n5);
console.log(n5);
n6 = Number(n6); // Number() só aceita números
console.log(n6, typeof n6);
n7 = Number(n7);
console.log(n7, typeof n7);
n8 = Number(n8);
console.log(n8, typeof n8);
n9 = Number(n9);
console.log(n9, typeof n9);
n10 = Number(n10);
console.log(n10, typeof n10);
n10 = n10.toString(); //.toString() para converter para string
console.log(n10, typeof n10);
//n11 = n11.toString(2); // só a primeira é válida
//console.log(n11, typeof n11);
//n11 = n11.toString(8);
//console.log(n11, typeof n11);
//n11 = n11.toString(10);
//console.log(n11, typeof n11);
n11 = n11.toString(16);
console.log(n11, typeof n11);
console.log(typeof n3, n3) //depois de fazer o parseInt no valor o parseFloat desabilita?
console.log(n1 + n2, typeof n1, typeof n2);
console.log(typeof n1, typeof n2, typeof n3, typeof n4, typeof n5)