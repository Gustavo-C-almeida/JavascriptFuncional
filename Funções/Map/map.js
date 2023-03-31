const carrinho = [
    {nome: "caneta", quant: 12, preco: 8.99},
    {nome: "impressora", quant: 2, preco: 380},
    {nome: "Estojo", quant: 1, preco: 12}
]


nome = produto => produto.nome
total = produto => produto.preco*produto.quant
console.log(carrinho.map(nome))
console.log(carrinho.map(total))


Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i<this.length;i++){
        const res = fn(this[i], i, this)
        novoArray.push(res)
    }
    return novoArray
}
nome = produto => produto.nome
total = produto => produto.preco*produto.quant
console.log(carrinho.meuMap(nome))
console.log(carrinho.meuMap(total))
