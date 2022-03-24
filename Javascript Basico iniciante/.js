var base = prompt("Digite a base do retangulo: ")
var altura = prompt("Digite a altura do retangulo: ")

var area = base * altura
var perimetro = base * 2 + altura * 2

console.log("AREA = " + area);
console.log("PERIMETRO = " + perimetro);
console.log("DIAGONAL = " + Math.sqrt((base * 2) + (altura * 2)));
