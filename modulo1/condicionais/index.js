/* //EXERCICIOS DE INTERPRETACAO

/* 1- 
A)  */
/* a)Se o número tiver resto 2 será igual a 0
b) numeros de igual valor a 0
c) Se os numeros nao forem igual a 0 */

/* 2-

a) Para essas 4 frutas em especifico terem um preço determinado. O resto dos produtos serão R$5,00 
b) O preço da fruta maça é R$2,25 */
//c) */

/* 3-

a) Está pedindo ao usuario um numero
b) se for o numero 10 será imprimido no console "Esse número passou no teste" e se for -10 não aparecerá nada
pois não tem o ELSE IF
c) 

EXERCICIOS DE ESCRITA

1- 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
(apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
     imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */

let idadeUser = Number( prompt("Qual a sua idade?"))

if (idadeUser >= 18) {
    console.log("Você pode dirigir")
} else {
    (idadeUser < 18) {
    console.log("Você não pode dirigir =/")
    }

    