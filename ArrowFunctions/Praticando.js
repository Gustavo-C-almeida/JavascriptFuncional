// Forma normal:
// function Calc(seg){
//     let min = seg/60
//     let hr = min/60
//     let dia = hr/24
//     let semanas = dia/7
//     return (`Semanas: ${semanas.toFixed(1)}, Dias: ${dia.toFixed(1)}, Horas: ${hr.toFixed(1)}, Minutos: ${min.toFixed(0)}, Segundos: ${seg}`)
// }
// Função normal:
const Calc = (seg) => {
    let min = seg/60
    let hr = min/60
    let dia = hr/24
    let semanas = dia/7
    return (`Semanas: ${semanas.toFixed(1)}, Dias: ${dia.toFixed(1)}, Horas: ${hr.toFixed(1)}, Minutos: ${min.toFixed(0)}, Segundos: ${seg}`) 
}
console.log(Calc(1233613))