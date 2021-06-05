/*EXERCÍCIO 03
Escreva um programa em javascript que calcule e mostre a média de todos os números pares de 1 até 200;
*/

var cont = 0;
var soma = 0;
while (cont <= 200) {
    if (cont % 2 == 0)
        soma = soma + cont;
    cont++;
}
document.write("A média é: ", soma / 100)