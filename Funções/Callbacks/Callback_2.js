//importando o modulo fs
const fs = require("fs")
//importando o modulo path
const path = require("path")
//Registrando o caminho do arquivo:
const caminho = path.join(__dirname, "dados.txt")
//criando a função callback.
const exibirconteudo = (_, conteudo) => console.log(conteudo.toString())
//Na função readFile, vamos passar os parametros: path(no caso o caminho), Opções que deixaremos vazias e função callback
console.log("inicio")
fs.readFile(caminho,{}, exibirconteudo)
//se não quisermos colocar opções, podemos pular o parametro e colocarmos direto a callback
fs.readFile(caminho, exibirconteudo)
console.log("fim")
console.log("Inicio Sync...")
const conteudo = fs.readFileSync(caminho)
console.log("Fim Sync...")