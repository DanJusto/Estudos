let listStudents = [
  {
    name: "Daniel",
    noteOne: 10,
    noteTwo: 10,
  },
  {
    name: "Bruno",
    noteOne: 7,
    noteTwo: 5,
  },
  {
    name: "Juliana",
    noteOne: 9.5,
    noteTwo: 10,
  },
  {
    name: "Gabriel",
    noteOne: 6,
    noteTwo: 3,
  },
  {
    name: "Célio",
    noteOne: 8,
    noteTwo: 6,
  },
]

function checkAverage(n1, n2) {
  let average = (n1 + n2) / 2
  return average
}

function messageApproval(average, name) {
  if(average >= 7) {
    return `Parabéns, ${name}! Você foi aprovado(a) no concurso!`
  } else {
    return `Não foi dessa vez, ${name}! Tente novamente!`
  }
}

for(student of listStudents) {
  let average = checkAverage(student.noteOne, student.noteTwo)
  alert(`A média do(a) aluno(a) ${student.name} é: ${average.toFixed(2)}
${messageApproval(average, student.name)}`)
}