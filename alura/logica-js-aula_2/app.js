alert('Boas vindas ao jogo do número secreto');
var numeroMax = 100
var numeroSecreto = parseInt (Math.random() * numeroMax + 1);
console.log(numeroSecreto);
var chute;
var tentativas = 1;

while (chute != numeroSecreto){
     chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);
    
    if (chute == numeroSecreto) {
        break;
    } else { //Se o número for diferente
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }
        else {
            alert(`O número secreto é maior que ${chute}`);
        }
         //tentativas = tentativas + 1;
         tentativas++

} }

var palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}`);

//if(tentativas > 1){
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} //tentativas`); }
//else {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

