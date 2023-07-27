// exercicio básico
const alunos = [
    { nome: "João", nota: 8.5, idade: 20 },
    { nome: "Maria", nota: 9.0, idade: 22 },
    { nome: "Pedro", nota: 7.2, idade: 19 },
    { nome: "Ana", nota: 9.8, idade: 21 },
    { nome: "Lucas", nota: 6.5, idade: 23 }
  ];

Array.prototype.MeuMap = function(fn) {
    const NewArray = []
    for (let i = 0; i < this.length; i++){
        const res = fn(this[i], i, this)
        NewArray.push(res)
    }
    return NewArray
    
}

const getNome = aluno => aluno.nome
console.log(alunos.MeuMap(getNome))

const GetCompComMedia = aluno => aluno.nota - 7
const ComparaMedia = alunos.MeuMap(GetCompComMedia)
console.log(ComparaMedia)

