/*EXERCÍCIO 04
Escreva um programa em javascipt que leia um número inteiro N da entrada padrão (TECLADO). Logo em seguida, leia N valores da entrada (TECLADO).
*/
var i = parseInt(prompt("Informe um valor: "));
var cont = 1;
do {
    var valor = parseInt(prompt("Informe outro valor: "));
    cont++;
}
while (cont <= i)