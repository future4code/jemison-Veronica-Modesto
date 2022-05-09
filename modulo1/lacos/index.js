/* EXERCICIOS DE INTERPRETACAO

1- O código está aumentando 1 ao número repetidamente até o o valor ser menor q 5. 
A primeira resposta será 1

2 - Vai ser impresso todos os números menores que 18. è suficiente SVGImageElement, teríamos que usar 
o Array.length. */

// 3 - iria imprimir a quantidade de asteriscos que o usuário pedisse.a


//EXERCICIOS DE ESCRITA

/* 1. 


const animais = Number(prompt("Quantos animais de estimação vc tem?"))
    
if (animais === 0) {
    console.log("Que pena! Você pode adotar um pet!")

} else if (animais > 0) {

    const nomesBichinhos = []

    //enquanto o NOME for menor que o numero de animais

    for (let nome = 1; nome <= animais; nome++) {  
        const nomeDoBixinho = prompt(`Qual o nome do seu bixinho ${nome} ?`)
        nomesBichinhos.push(nomeDoBixinho)
        console.log(nomesBichinhos)    }

} else { 
    console.log("Informe um número válido")


2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e
     **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex 
    `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original */

//a- 

/*     const original = [11, 35, 49, 87, 65, 2, 28, 74]

    function imprimeValores (array) {
        for (let i = 0; i < array.length; i++) {
            const numeros = array[i];
            console.log(numeros)            
        }
    }
imprimeValores (original) */

//b - 
/* const original = [11, 35, 49, 87, 65, 2, 28, 74]

    function imprimeValores (array) {
        for (let i = 0; i < array.length; i++) {
            const numeros = array[i];
            console.log(numeros / 10)            
        }
    }
imprimeValores (original) */

//c - Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e
    // **imprima** esse novo array

    
/* const original = [11, 35, 49, 87, 65, 2, 28, 74] 
const numPares = []

function novoArrayPares (array) {
    for (let i = 0; i < array.length; i++) {
        let pares = (array[i] % 2 === 0)
        console.log(pares.push(array[i]))
    }
}  
novoArrayPares ()    */  
/* d - 

const novoArrayStrings = ["O elemento do índex `i` é: `numero`"] */

//e - Escreva um programa que imprima no console o maior e o menor números contidos no array original


/* const original = [11, 35, 49, 87, 65, 2, 28, 74] 

function MaiorNumero (array){
    let maior = 0
    for(let numero of array) {
        if (numero > maior){
            maior = numero
        }
    }
    return maior
}
console.log(MaiorNumero(original))


function MenorNumero (array){
    let menor = 0
    for(let numero of array) {
        if (numero < menor){
            menor = numero
        }
    }
    return menor
}
console.log(MenorNumero(original)) */