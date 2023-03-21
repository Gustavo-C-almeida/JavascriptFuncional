//uma função que pede como parametro uma função, valor1, valor2
function soma(v1,v2){
    return(v1+v2)
}
function sub(v1,v2){
    return(v1-v2)
}
function mult(v1,v2){
    return(v1*v2)
}
function div(v1,v2){
    return(v1/v2)
}
function Calc(v1,v2){
    return function(fn){
        return(fn(v1,v2))
    }
}
console.log(Calc(6,3)(soma))
console.log(Calc(6,3)(mult))
console.log(Calc(6,3)(sub))
console.log(Calc(6,3)(div))