// Crie um laço de repetição que exiba os numeros primos de 1 a 50 
// Vai iniciar com 1
for (let i = 1; i <= 50; i++) {// vai fazer a sequencia até 50
    let primo = true
    for(let j = 2; j < 1; j++){ // faz a sequencia de numeros anteriores até o o atua i
        if(i % j == 0){
            primo = false 
            break
        }
        
    } 
    // para imprimir somente os primos 
        if (primo) { //se variavel for verdadeiro, ela vai se imprimido
             console.log(i)
        }
}