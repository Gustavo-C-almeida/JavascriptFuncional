const carrinhoDeCompras = [
    { nome: "Arroz", preco: 5.99, quantidade: 2, fragil: false },
    { nome: "Leite", preco: 3.50, quantidade: 3, fragil: false },
    { nome: "Maçã", preco: 2.50, quantidade: 30, fragil: true },
    { nome: "Bolo", preco: 12.50, quantidade: 5, fragil: true },
    { nome: "Brigadeiro", preco: 0.50, quantidade: 120, fragil: true }
    // Adicione mais produtos conforme necessário
];
const media = carrinhoDeCompras
.filter(item => item.fragil)
.map(item => item.preco * item.quantidade)

console.log(media)
 
// Falta o reduce que deve mostrar a quantidade de itens, valor final Total e media dos preços



