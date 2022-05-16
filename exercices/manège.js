
// correction

/*let manege = 0;
while(manege < 10){
    manege++;
    document.write("c'est le tour n° " + manege + '<br>');
}

let question = parseInt(prompt("combien de tour voulez-vous ?"), 10);
let compteur = 1;

while(compteur <= question){
    document.write("c'est le tour n° " + compteur + '<br>');
    compteur++;
}*/


// Avec input

let dixTours = document.getElementById('dixTours');

let tour = 0;
while(tour < 10){
    tour++;
    dixTours.innerHTML += "C'est le tour n° " + tour + '<br>';
}

let resultat = document.getElementById('resultat');

function manege(){
    let saisieUtilisateur = document.getElementById('saisieUtilisateur').value;
    
    
  if(saisieUtilisateur > 10){
        resultat.innerHTML += "Vous avez fait trop de manège";
    }else{
        resultat.innerHTML += "Vous avez fait " + " " + saisieUtilisateur + ' ' + 'tours de manège';
    }
    console.log('manege');

}