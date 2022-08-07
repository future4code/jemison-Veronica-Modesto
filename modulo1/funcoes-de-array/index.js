// Exercícios de interpretação de código

//1 - Vai aparecer toda a informacao dos objetos, o index e a array 
//2 - Vai aparecer apenas os nomes dos usuários
//3 - Aparecerá todos os objetos menos o q tem o Chijo

// EXERCICIO DE ESCRITA -----

//1 - A

/* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const novoPets = pets.map((item, index, array) => {
    return item.nome
 })
console.log(novoPets)

//B

const soSalsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(soSalsichas) 

//C - Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


const soPoodle = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})
console.log(soPoodle) 

const soPoodle2 = soPoodle.map((item) => {
    return item.nome 
    })

console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",soPoodle2) */

//2 --------

/* //A - 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 const nomeProdutos = produtos.map((item, index, array) => {
    return item.nome
 })
console.log(nomeProdutos)

//B -

const nomeEpreco = produtos.map((item) => {
    return item.nome, item.preco*0.05
})
console.log(nomeEpreco)

//C- 

const bebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(bebidas)
 */


//D - tive dificuldade ----
/* const ype = produtos.filter((item, index, array) => {
    if (produtos.includes("Ypê")) {
        return item.nome 
  }
})
console.log(ype) */

//E - 




