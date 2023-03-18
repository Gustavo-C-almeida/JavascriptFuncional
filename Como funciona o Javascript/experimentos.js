// function fn5(){
//     console.log("timeout")
//    }
// function fn4(){
//     fn5()
//    }
// function fn3(){
//     setTimeout(() => fn4(), 3000)
//     console.log("fn3")
// }
// function fn2(){
//  fn3()
// }
// function fn1(){
//     fn2()
// }
// function main(){
//  fn1()
// }
// main()
// console.log("Fim")
const EsperarPor = (tempo) => {
    const futuro = Date.now() + tempo
    while(Date.now() < futuro){

    }
}

setTimeout(() => console.log("Exec #01"), 400)

setTimeout(() => {
    EsperarPor(5000)
    console.log("Exec")
}, 300)

EsperarPor(5000)
console.log("Fim")