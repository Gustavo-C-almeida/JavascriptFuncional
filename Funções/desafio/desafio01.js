
const carrinhoDeCompras = [
    { nome: "Arroz", preco: 5.99, quantidade: 2, fragil: false },
    { nome: "Leite", preco: 3.50, quantidade: 3, fragil: false },
    { nome: "Maçã", preco: 2.50, quantidade: 30, fragil: true },
    { nome: "Bolo", preco: 12.50, quantidade: 5, fragil: true },
    { nome: "Brigadeiro", preco: 0.50, quantidade: 120, fragil: true }
]

//minha versão sem ver o video
const soma = (acc, el) => acc+el

const frageis = carrinhoDeCompras
.filter(item => item.fragil);

for(i = 0; i < frageis.length; i++){
    quant = frageis[i].quantidade
    preco = frageis[i].preco
    tot = quant*preco
    console.log(quant, preco, tot)
}

 const media = (frageis.map(item => item.preco*item.quantidade)
 .reduce(soma))/frageis.length

 console.log(media)
 //versão corrigida com o video:
 



