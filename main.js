import MiLibreria from './modulos.js'

//variables
const esto = [-1, 0, 1, 2, 4, 8, 16, 32, 64]
// const esto = [-1, 0, 1, 2, 4, 8, 16]
const users = [{nombre: 'Marco', edad: 22}, {nombre: 'Monica', edad: 26}, {nombre: 'Esmeralda', edad: 24}]
const valor = 12
//funciones
function hasEsto(item) {
    const res = item * 2
    console.log(res)
    return res
}

function checkAdult(age) {
    return age >= 18;
  }

//Metodos
function alertPorCada () {
const metodo1 = MiLibreria.porCada(esto, hasEsto)
alert(metodo1)
}

function alertFiltra () {
    const metodo2 = MiLibreria.filtra(esto, checkAdult)
    alert(metodo2)
    }

function alertMapea() {
    const metodo3 = MiLibreria.mapea(esto, hasEsto)
    alert(metodo3)
    }
function alertEncuentra() {
    const metodo4 = MiLibreria.encuentra(esto, checkAdult)
    alert(metodo4)
    }
function alertEncuentraIndice() {
    const metodo5 = MiLibreria.encuentraIndice(esto, checkAdult)
    alert(metodo5)
}
function alertContiene() {
    const metodo6 = MiLibreria.contiene(esto, valor)
    alert(metodo6)
}
function alertExtrae() {
    const metodo7 = MiLibreria.extrae(users, 'nombre')
    alert(metodo7)
}
function alertSin() {
    const metodo8 = MiLibreria.sin(esto, 2, 4, 8)
    alert(metodo8)
}

window.alertPorCada = alertPorCada
window.alertFiltra = alertFiltra
window.alertMapea = alertMapea
window.alertEncuentra = alertEncuentra
window.alertEncuentraIndice = alertEncuentraIndice
window.alertContiene = alertContiene
window.alertExtrae = alertExtrae
window.alertSin = alertSin