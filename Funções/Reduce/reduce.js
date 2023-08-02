const carrinhoDeCompras = [
    { nome: "Arroz", preco: 5.99, quantidade: 2 },
    { nome: "Leite", preco: 3.50, quantidade: 3 },
    { nome: "Maçã", preco: 2.50, quantidade: 1 },
    // Adicione mais produtos conforme necessário
];

const getTot = item => item.quantidade * item.preco
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el
}
const TotEL = carrinhoDeCompras.map(getTot)
console.log(TotEL)
const TotGeral = 
TotEL.reduce(somar, 0)

console.log(TotGeral)

 
  