// exemplo de funções 

// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)

}
imprimirSoma(2, 4)

// função com retorno 
function soma(a , b) {
    return a + b
}
console.log(soma(2, 4))

// função armazenada em uma variavel
const somar =  function (a, b) {
    console.log(a + b)
}
somar(2, 5)

// função armazenada em um arrow function
const somaArrow = (a, b) => {
    return a + b 
}
console.log(somaArrow)