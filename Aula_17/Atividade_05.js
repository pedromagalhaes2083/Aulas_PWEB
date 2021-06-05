/*EXERCÍCIO 05
Escreva um programa em javascipt que leia um número N da entrada padrão. Logo em seguida, leia N valores da entrada e ao final mostre a soma desses N valores.
*/
var i = parseInt(prompt("Informe um valor: "));
var cont = 1;
var soma = 0;
do {
    soma = soma + parseInt(prompt("Informe outro valor: "));
    cont++;
}
while (cont <= i)
document.write("O resultado final da soma dos valores é: ", soma);