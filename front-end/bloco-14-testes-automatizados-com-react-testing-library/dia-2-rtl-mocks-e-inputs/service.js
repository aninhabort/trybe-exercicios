// Criar uma função que gere numeros aleatórios
function randomNum() {
  const num = Math.floor(Math.random() * 100);
  console.log(num);
}
randomNum();

module.exports = randomNum;