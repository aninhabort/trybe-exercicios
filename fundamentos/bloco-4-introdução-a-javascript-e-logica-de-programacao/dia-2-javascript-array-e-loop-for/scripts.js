let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* QUESTÃO 1 */
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/* QUESTÃO 2 */
let soma = 0;
for (var i = 0; i < numbers.length; i++) {
    soma += numbers[i]
}
console.log(soma);

/* QUESTÃO 3 */
let somar = 0;
for (var i = 0; i < numbers.length; i++) {
    somar += numbers[i]
}
let somaAritmetica = somar / numbers.length;
console.log(somaAritmetica);

/* QUESTÃO 4 */
if (somaAritmetica > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

/* QUESTÃO 5 */
let maiorValor = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
}
console.log(maiorValor);

/* QUESTÃO 6 */
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        console.log(numbers[i]);
    } else {
        console.log("nenhum valor ímpar encontrado")
    }
}

/* QUESTÃO 7 */
let menorValor = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    if (menorValor >= numbers[i]) {
        menorValor = numbers[i];
    }
}
console.log(menorValor);

/* QUESTÃO 8 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/* QUESTÃO 9 */
let divisao = 0;
for (var i = 0; i < arr.length; i++) {
    divisao = arr[i] / 2;
    console.log(divisao);
}
