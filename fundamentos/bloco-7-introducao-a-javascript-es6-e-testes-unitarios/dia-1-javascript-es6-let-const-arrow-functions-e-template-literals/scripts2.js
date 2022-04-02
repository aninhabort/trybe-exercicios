// QUESTÃO 1
const fatorial = (n) => {
    if (n == 0) {
        return 1;
    } else if (n == 1 || n == 2) {
        return n;
    } else if (n > 2) {
        let number = n;
        return number * fatorial(n - 1);
    }
}
console.log(fatorial(5));

// QUESTAO 2
function maiorPalavra(string) {
    var arrStr = string.split(" ");
    var big = 0;
    var word = null;
    arrStr.forEach(function (str) {
        if (big < str.length) {
            big = str.length;
            word = str;
        }
    });
    return word;
}
console.log(maiorPalavra("Bom dia Trybers!"));

// QUESTAO 3
var counter = 0;
function clickCounter() {
  counter += 1;
  document.getElementById("counter").innerHTML = counter;
};
