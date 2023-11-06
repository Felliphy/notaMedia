/*
-   A soma dos dois números;
-   A subtração dos dois números;
-   A multiplicação dos dois números;
-   A divisão dos dois números;
-   O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

-   Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
-   Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/
alert('Informe o nome e as notas das duas provas para saber a média.')

let student = prompt('Digite o nome do(a) alno(a): ')
let nota1 = prompt('Digite a nota da primeira prova: ')
let nota2 = prompt('Digite anota da segunda prova: ')

let average = (Number(nota1) + Number(nota2)) / 2

let result = average > 7

average = average.toFixed(1)

if (result) {
  alert(`A média do(a) aluno(a) ${student}  é: ${average}
  Parabéns, ${student}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student}  é: ${average}
    Não foi desta vez, ${student}! Tente novamente!`)
  }





