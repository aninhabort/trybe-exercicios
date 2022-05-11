const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerStudent = (rightAnswers, studentAnswers, totalRightAnswers) => {
    return totalRightAnswers(rightAnswers, studentAnswers);

}

const count = (right, student) => {
    let pontuacaoFinal = 0;
    for (let i = 0; i <= student.length; i += 1) {
        for (let j = 0; i <= right.length; j += 1) {
            if (student[i] === right[j]) {
                return pontuacaoFinal += 1;
            } else if (student[i] !== right[j]) {
                return pontuacaoFinal += 0.5;
            } else if (student[i] === 'N.A') {
                return pontuacaoFinal = 0;
            }
        }
    }
    return pontuacaoFinal;
}

console.log(answerStudent(RIGHT_ANSWERS, STUDENT_ANSWERS, count));