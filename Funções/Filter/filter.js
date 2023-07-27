// exercicio básico
const alunos = [
    { nome: "João", nota: 8.5, idade: 20 },
    { nome: "Maria", nota: 9.0, idade: 22 },
    { nome: "Pedro", nota: 7.2, idade: 19 },
    { nome: "Ana", nota: 9.8, idade: 21 },
    { nome: "Lucas", nota: 6.5, idade: 23 }
  ];
  
Array.prototype.meuFilter = function(fn) {
    const newArray = [] 

    for(let i = 0; i < this.length; i++){
      if(fn(this[i], i, this)){
          newArray.push(this[i])
      }
    }
    return newArray
}

const getNome = aluno => aluno.nome
const ntmaiorigualoito = aluno => aluno.nota >= 8
const ntmaiorquedez = aluno => aluno.nota > 10
const alunosbonsidademaiordevinte = aluno => aluno.nota >= 8 && aluno.idade >= 22
const alunosbons = alunos
    .meuFilter(alunosbonsidademaiordevinte) 
    .map(getNome)
    // aqui a função dentro de .filter() pode ser alterada

console.log(alunosbons)



  
  