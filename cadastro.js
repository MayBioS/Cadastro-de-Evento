
var lista = []

var entrada = require('readline-sync')

var opcao = 's'
while(opcao == 's'){
    var nome = entrada.question('Digite o nome do participante..: ')
    var idade = entrada.question('Digite a idade do participante..: ')
    if (idade >= 18){
        if (lista.length < 100){
            console.log("Cadastro Permitido")
            lista.push (nome)
        }
        else
        console.log('Cadastro não permitido, pois atingiu o limite máximo de 100')
    }
    else{
        console.log('Cadastro não permitido pela idade')
    }
    opcao = entrada.question("Deseja cadastrar outro participante? (s ou n)")
}

i = 1
while (i < lista.length){
    console.log(lista)
    i++
}