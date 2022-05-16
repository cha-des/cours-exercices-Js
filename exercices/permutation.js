let resultat = document.getElementById("result");   

var nombre1 = 5;
var nombre2 = 3;
var temp = "";

temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;


resultat.innerHTML += 'Désormais la variable nombre1 vaut : ' + nombre2 + ' et la variable nombre2 vaut : ' + nombre1 + '<br>';


