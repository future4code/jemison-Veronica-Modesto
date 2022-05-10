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

1- 
let idadeUser = Number( prompt("Qual a sua idade?"))

if (idadeUser >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir =/")
}

2- 

 let turno = prompt("Você estuda em que turno? Digite M para Matutino, V para Vespertino ou N para noturno.".toUpperCase())
 
if (turno === "m"){
     console.log("Bom dia!")
} 
else if (turno === "v") {  
    console.log("Boa tarde!")
} 
else if (turno === "n") {
    console.log("Boa noite!") 
    }*/

//3- 

/* let turno  = prompt("Você estuda em que turno? Digite M para Matutino, V para Vespertino ou N para noturno.".toUpperCase())
switch (turno) {
case "M":
    console.log("Bom dia!")
    break;
case "V":
    console.log("Boa tarde")
    break;
case "N": 
    console.log("Boa noite!")
default:
    console.log("Aperte V, M ou N")
} */

/* 4-

let filme = prompt("Qual gênero de filme vc irá assistir?")
let preçoFilme = Number(prompt ("Quanto custa o filme?") )

function assistirFilme (filme, preçoFilme) { 
    
if (filme === "fantasia" && preçoFilme <= 15){
        console.log("Bom filme!")
} else {
        console.log("Escolha outro filme!")
    }
}
assistirFilme (filme, preçoFilme)