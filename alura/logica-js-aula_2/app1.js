var nome = prompt('Qual seu nome?')
var idade = prompt ('Qual sua idade?')
var carteira = true;

alert(`Muito prazer, ${nome}! Você tem ${idade} anos. `)
if (idade > 18 && carteira){
    alert('Você pode dirigir!')
}
else {
    alert('Não pode dirigir')
}