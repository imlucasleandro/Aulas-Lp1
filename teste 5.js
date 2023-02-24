// sequência de Fibonacci até décimo termo no console


let n1 = 0
let n2 = 1
console.log(n1)   
console.log(n2)

for (let index = 3; index < 10; index++) {
    let n3 = n1 + n2 // vai somar os numeros interiores e gera a resposta
    // 2 + 5 = n5
    console.log(n3)
    n1 = n2 
    n2 = n3
}