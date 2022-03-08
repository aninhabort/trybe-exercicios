const a = 5;
const b = 10;
const c = 20;

/* QUESTÃO 1 */
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

/* QUESTÃO 2 */
if (a < b && b < c) {
    console.log(c);
} else if (a < b && b > c) {
    console.log(b);
} else {
    console.log(a);
}

/* QUESTÃO 3 */
if (b > 0) {
    console.log("positivo");
} else if (b < 0) {
    console.log("negativo");
} else {
    console.log("zero");
}

/* QUESTÃO 4 */
const d = 60;
const e = 40;
const f = 80;
const soma = d + e + f;

if (soma == 180) {
    console.log(true);
} else {
    console.log(false);
}

/* QUESTÃO 5 */
let xadres =  "bispo";

if (xadres = "bispo") {
    console.log("diagonal");
} else {
    console.log("Erro")
}

/* QUESTÃO 6 */
let porcentagem = 75;

if (porcentagem >= 90) {
    console.log("A");
} else if (porcentagem >= 80) {
    console.log("B");
} else if (porcentagem >= 70) {
    console.log("C");
} else if (porcentagem >= 60) {
    console.log("D");
} else if (porcentagem >= 50) {
    console.log("E");
} else {
    console.log("F")
}

/* QUESTÃO 7 */
let par = 8;

if (par / 2) {
    console.log(true);
} else {
    console.log(false);
}

/* QUESTÃO 8 */
const valorCusto = 950;
const impostosobreOCusto = 0.20;
const valorVenda = 2000;

let valorCustoTotal = valorCusto + impostosobreOCusto;
let lucro = valorVenda - valorCustoTotal;

console.log(valorCustoTotal);
console.log(lucro);

/* QUESTÃO 9 */
