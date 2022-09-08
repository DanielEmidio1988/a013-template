//Atividade prática!

//Exercicio com aninhamento
const idade = 12
let escolha = Number(prompt("Escolha sua opção: "))

if (idade >=13){
    if (idade <=17){
        console.log("Seu dependente já pode ter um cartão vinculado ao seu")
    }else {
        console.log("Maior de idade! Consulte outras possibilidades Labank")
    }
}else{
    console.log("Consulte outras possibilidades Labank")
}

//operações relacionais
if (idade >= 13 && idade <=17){
    console.log("Seu dependente já pode ter um cartão vinculado ao seu")
}else{
    console.log("Consulte outras possibilidades Labank")
}

//if ternário
console.log(idade >= 13 && idade <= 17?"\nIdade do dependente é entre 13 e 17 e já pode ter um cartão":"Verifique outras opções")

//switch case
switch(escolha){
    case  1:
    console.log("Facil");
    break;
    case 2:
    console.log("Black");
    break;
    case 3:
    console.log("Platinium");
    break;
    case 4:
    console.log("Master Gold");
    break;
    default:
        console.log("Escolha uma das 4 opções disponiveis");
   
}

//Exercicio prático

//Exercicio 1.1. Comparar o número digitado pelo usuário e se ele é divisivel por 2 ou 3 usando if aninhado
let numero = Number(prompt("Digite um numero"))

    if (numero % 2 === 0){
        console.log("É divisivel por 2")
        if (numero % 3 === 0){
            console.log("É divisivel por 3")
        }else{
            console.log("Não é divisivel nem por 2 ou 3")
        }
        }else if(numero % 3 === 0){
            console.log("É divisivel por 3")
        }else {
            console.log("Não é divisivel nem por 2 ou 3") 
        }


//Exercicio 1.1. Comparar o número digitado pelo usuário e se ele é divisivel por 2 ou 3 usando operação relacional
if (numero % 2 === 0 || numero % 3 === 0){
    console.log("É divisivel por 2 ou 3")
}else{
    console.log("Não é divisivel por 2 ou 3")
}

//Exercicio 2. O usuário deve digitar um numero Surpresa. Caso ele sej igual 30, imprimir mensagem de acerto.
//senão, informe que não foi desta vez. Utilizar if ternário:
let numeroSurpresa = Number(prompt("Digite o seu numero"))

console.log(numeroSurpresa === 30? "UFA ACERTEI":"não foi dessa vez :(")

//Exercicio 3. Ainda utilizando o exercicio anterior, fazer um switch case para verificar se o usuário digitou 6,12,18,24 ou 30 e
//imprimir o numero.

switch(numeroSurpresa){
    case 6:
        console.log("Numero é: ", numeroSurpresa)
        break
        case 12:
        console.log("Numero é: ", numeroSurpresa)
        break
        case 18:
        console.log("Numero é: ", numeroSurpresa)
        break
        case 24:
        console.log("Numero é: ", numeroSurpresa)
        break
        case 30:
        console.log("Numero é: ", numeroSurpresa)
        break
        default:
            console.log("O numero é maior que 30 ou menor que 6")
}