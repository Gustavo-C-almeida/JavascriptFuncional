let carro = {
    andando: false,
    cor: "Preto",
    marca: "Fiat",
    preco: 25000,
    kmhora: 0,
    andar: function(){
        console.log("Andando...")
        this.kmhora = 30
        this.andando = true
    },
    Acelerar: function(){
        console.log("acelerando...")
        this.kmhora += 20
        this.andando = true
    },
    desacelerar: function(){
        console.log("desacelerando...")
        this.kmhora -= 20
    },
    freiar: function(){
        console.log("freiando...")
        this.kmhora = 0
        this.andando = false
    },
    status: function(){
        console.log("KM/HR: ",this.kmhora," ","Andando: ",this.andando," ")
    }
}
carro.status()
carro.andar()
carro.status()
carro.Acelerar()
carro.status()
carro.Acelerar()
carro.status()
carro.desacelerar()
carro.status()
carro.desacelerar()
carro.status()
carro.freiar()
carro.status()