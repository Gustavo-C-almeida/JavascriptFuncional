//function expression:
const BoaTarde = function(){
    console.log("Boa tarde")
}
BoaTarde()

function soma(a = 0,b = 0){
    return(a+b)
}
const res = soma(3,3, 6, 8, 9)
console.log(res)
const res2 = soma(6)
console.log(res2)