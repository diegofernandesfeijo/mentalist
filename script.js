var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;

while (tentativas > 0) 
{
var chute = parseInt(prompt("Digite um número entre 0 e 10"));

  if (numeroSecreto == chute) {
    alert("Acertou")
    break /*para WHILE após a variavel for TRUE*/

  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor!")
    tentativas = tentativas - 1

  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior!")
    tentativas = tentativas - 1
  }
}
if (chute != numeroSecreto) {
  alert ("Suas tentativas acabaram. O número secreto era: " + numeroSecreto);
}

/*
console.log = gravar logs do console e gera historico na pagina
função: Math.random() - gera um numero aleatório
Math.random() * 10 (gerara random de 0 até 10)
Break para sair do loop
*/