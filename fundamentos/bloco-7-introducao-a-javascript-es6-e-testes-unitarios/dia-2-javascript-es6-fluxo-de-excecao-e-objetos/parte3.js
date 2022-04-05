const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// QUESTÃO 1
function addTurno() {
    lesson2.turno = 'manhã';
    console.log(lesson2)
}
addTurno()

// QUESTÃO 2
function listKeys() {
    const key = Object.keys(lesson3);
    console.log(key)
}
listKeys()

// QUESTÃO 3
function lengthObj() {
    const length = Object.keys(lesson1).length
    console.log(length)
}
lengthObj()

// QUESTÃO 4
function listValues() {
    const value = Object.values(lesson3)
    console.log(value)
}
listValues()

// QUESTÃO 5
const allLessons = {};
Object.assign(allLessons, {lesson1: lesson1}, {lesson2: lesson2}, {lesson3: lesson3})
console.log(allLessons)

// QUESTÃO 6
function somaTotalEstudantes() {
    const lsn1 = Object.values(lesson1); 
    const lsn2 = Object.values(lesson2);
    const lsn3 = Object.values(lesson3);
    console.log(lsn1[1] + lsn2[1] + lsn3[1])
}
somaTotalEstudantes()

// QUESTÃO 7
function valueLesson(lesson, number){
    const lsn = Object.values(lesson);
    console.log(lsn[number])
}
console.log(valueLesson(lesson1, 0));

// QUESTÃO 8
function verifyPair(lessons, value1, value2) {
    if (lessons[value1] == value2) {
        return true
    }
    return false
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
