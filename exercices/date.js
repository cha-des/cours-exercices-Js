let affichageDate = document.getElementById('date');

let date = new Date();

let numJour = date.getDate();
let numMois = date.getMonth() + 1; // car on démarre à O or je veux démarrer à 1
let numAnnee = date.getFullYear();

if( numMois < 10 ){
    numMois = '0' + numMois;
}

if( numJour < 10 ){
    numJour = '0' + numJour;
}


affichageDate.innerHTML += "Nous sommes le : " +  numJour + '/' + numMois + '/'+ numAnnee + '<hr></hr>';


// String(aujourdhui.getHours()).padStart(2,'0');