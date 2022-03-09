// QUESTÃO 1
let fatorial = 10;
let total = fatorial;
for (let i = 1; i < fatorial; i++) {
    total *= i;
}
console.log(total);

// QUESTÃO 2
let word = 'tryber';
let wordReverse = word.split('').reverse().join('');
console.log(wordReverse);

// QUESTÃO 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = '';
let smallWord = '';

for (var i = 0; i < array.length; i++) {
    if (array[i].length > bigWord.length) {
        bigWord = array[i];
    }
}
console.log(bigWord);

for (var j = 0; j < array.length; j++) {
    if (array[j].length < bigWord.length) {
        smallWord = array[j];
    }
}
console.log(smallWord);

// QUESTÃO 4
let numPrimo = 0;

for (let i = 0; i < 50; i++) {
    let bigPrimeNum = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            bigPrimeNum = false;
        }
    }
if (bigPrimeNum) {
    numPrimo = i;
}
}
console.log(numPrimo);