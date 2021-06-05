/*EXERCÍCIO 06 
Escreva um programa em javascipt que leia um número N da entrada padrão. Logo em seguida, calcule e mostre a média de N valores  lidos pelo teclado.
*/
var i = parseInt(prompt("Informe um valor: "));
var cont = 1;
var soma = 0;
do {
    soma = soma + parseInt(prompt("Informe outro valor: "));
    cont++;
}
while (cont <= i)
document.write("O resultado final da soma dos valores é: ", soma / i);