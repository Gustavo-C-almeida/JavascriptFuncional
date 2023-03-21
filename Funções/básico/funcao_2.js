function bomDia() {
    console.log("Bom dia!")
}
const boaTarde = function() {
    console.log("Boa Tarde!")
}
//função como parametro de outra
function executarQualquerCoisa(fn){
    if(typeof fn === "function"){
        fn()
    }
}
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)
// retornando função a partir de outra função
function potencial(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}
const potencia2 = potencial(2)
console.log(typeof(potencia2))
console.log(potencia2(8))

function Multiplicacao(v1){
    return function(v2){
        return(v1*v2)
    }
}
const dobro = Multiplicacao(2)
console.log(dobro(5))
function Dividir(v1){
    return function(v2){
        return(v2/v1)
    }
}

const metade = Dividir(2)
console.log(metade(8))
console.log(Dividir(4)(64))