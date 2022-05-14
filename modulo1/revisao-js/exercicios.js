// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}
retornaArrayInvertido(1,2,3)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}
retornaArrayInvertido(1,2,3)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}
retornaArrayOrdenado()

// EXERCÍCIO 04

function retornaNumerosPares(array) {
   return array.filter((item) => {
    return (item % 2 === 0)
   })
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let arrayPares = retornaNumerosPares(array)
      return arrayPares.map((item) => item * item)
   }


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0;
  for (let number of array) {
     if (number > maior) {
         maior = number;
       }
    }
    return maior
  }


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNum = num2
  let menorNum = num1
  
  if (num1 > num2) {
     maiorNum = num1
     menorNum = num2
   }
return objeto = { maiorNumero: maiorNum, maiorDivisivelPorMenor: (maiorNum % menorNum === 0), diferenca: (maiorNum - menorNum) }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
   }     
   
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   let triangulo 

   if ((ladoA === ladoB) && (ladoA === ladoC)) {
   triangulo = "Equilátero"
   }
   else if ((ladoA === ladoB) || (ladoC === ladoA) || (ladoB === ladoC)) {
   triangulo = "Isósceles"
   }
   else (triangulo = "Escaleno")
   return triangulo;
   }   


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}



// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let outraPessoaAnonima = {
     ...pessoa,
     nome: "ANÔNIMO"
     }
     return outraPessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((item) => 
   ((item.altura >= 1.5) && ((item.idade > 14) && (item.idade < 60))))
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   return pessoas.filter((item) => 
   ((item.altura < 1.5) || (item.idade <= 14) || (item.idade >= 60)))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}