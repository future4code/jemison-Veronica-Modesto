/* // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  let altura = Number( prompt( "Qual a altura do retângulo?"))
  let largura = Number( prompt( "Qual a largura do retângulo?"))
  
  let calculaAreaRetangulo = altura * largura  
  console.log(calculaAreaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {

  let anoAtual = Number( prompt( "Qual o ano atual?"))
  let anoNascimento = Number( prompt( "Qual o ano do seu nascimento?"))
  
  let imprimeIdade = anoAtual - anoNascimento 
 
  console.log(imprimeIdade) */
//}

/*  // EXERCÍCIO 03
function calculaIMC(peso, altura) {

 let imc = (peso / (altura * altura))
 return (imc)
}
calculaIMC(85, 1.8) */


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomePessoa = prompt("Qual o seu nome?")
  const idadeUser = Number (prompt("Qual a sua idade?"))
  const email = prompt("Qual o seu e-mail?")

  console.log ('Meu nome é',nomePessoa,'tenho',idadeUser,'anos, e o meu email é',email,'.')
}
imprimeInformacoesUsuario()
 
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."


 // EXERCÍCIO 05
 function imprimeTresCoresFavoritas() {

 let cor1 = [ prompt( "Cite 3 cores favoritas") ]
 let cor2 = [ prompt( "Cite 3 cores favoritas") ]
 let cor3 = [ prompt( "Cite 3 cores favoritas") ]

  return (cor1, cor2, cor3)

} 

/* // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return (string.toUpperCase())
}
retornaPrimeiroElemento("Olá") */


/* // EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let resultado = (custo / valorIngresso)
return resultado
}
calculaIngressosEspetaculo(3000, 30) */

/* // EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
return (string1 >= string2)

}
checaStringsMesmoTamanho("ola","abc") */

/* // EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return (array[0]) 
}
retornaPrimeiroElemento() */

/* // EXERCÍCIO 10
function retornaUltimoElemento(array) {
 return array[array.length-1]

}
retornaUltimoElemento() */

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 array.push(array.splice(0,1)[0])
return (array) */

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 return string1.toLowerCase() == string2.toLowerCase()
 console.log(string1, string2)

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}