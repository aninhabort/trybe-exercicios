// PARTE I 
// QUESTÃO 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

function welcome(nome) {
    console.log("Bem-vinda, " + nome);
}

welcome(info.personagem);

// QUESTÃO 2
info.recorrente = 'Sim';
console.log(info);

// QUESTÃO 3
for (let chaves in info) {
    console.log(chaves);
}

// QUESTÃO 4
for (let valor in info) {
    console.log(info[valor])
}

// QUESTÃO 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
console.log(info.personagem + ' e ' + info2.personagem + '\n' + info.origem + ' e ' + info2.origem + '\n' + info.nota + ' e ' + info2.nota + '\nAmbos recorrentes');

// QUESTÃO 6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// QUESTÃO 7
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }) 
console.log(leitor)

// QUESTÃO 8
let totalLivros = leitor.livrosFavoritos.length
console.log('Julia tem ' + totalLivros + ' livros favoritos');
