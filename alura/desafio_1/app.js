var titulo = document.querySelector('h1')
titulo.innerHTML=('Hora do desafio!')


function verificarClique(){
    console.log('Apertei')
}

function love (){
    alert('Eu amo Javascripts')
}

function cidade (){
    var cidade = prompt('Qual sua idade?')
    alert(`${cidade}, uma excelente cidade!`)
}
function somar (){
    var num1 = parseInt(prompt('Digite um número'))
    var num2 = parseInt(prompt ('Digite outro número'))
    var num3 = num1 + num2
    alert(`O resultado da soma entre ${num1} e ${num2} é igual a ${num3}`)
}