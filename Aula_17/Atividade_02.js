/*EXERCÍCIO 02 
Escreva um programa em javascript que calcule e mostre a soma de todos os números pares de 1 até 100.
*/
var soma = 0;
var cont = 0;
while (cont <= 100) {
    if (cont % 2 == 0)
        soma = soma + cont;
    cont++;
}
document.write("O resultado da soma é: ", soma);