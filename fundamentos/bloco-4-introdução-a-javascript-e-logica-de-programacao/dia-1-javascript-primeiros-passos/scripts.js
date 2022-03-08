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