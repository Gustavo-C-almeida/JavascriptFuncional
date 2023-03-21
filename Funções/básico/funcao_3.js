// //arrow function
// const hello = (nome) => console.log(`Olá ${nome}`)
// hello("Gustavo")
// const sum = (a,b) => (a+b)
// const mut = (a,b) => (a*b)
// const div = (a,b) => (a/b)
// const sub = (a,b) => (a-b)
// console.log(sum(3,4))
// console.log(mut(3,4))
// console.log(div(6,3))
// console.log(sub(6,3))
// function somar(nums){
//     let total = 0
//     for(let n =0; n<nums;n++){
//         total+=n
//     }
//     return total
// }
// function somar(nums){
//     let total = 0
//     for(let n of nums){
//         total+=n
//     }
//     return total
// }
// const somar = (...nums) => {
//     console.log(Array.isArray(nums))
//     let total = 0
//     for(let n of nums){
//         total += n
//     }
//     return total
// }
// console.log(somar(10,5,15,12,8))

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(5)(2))

