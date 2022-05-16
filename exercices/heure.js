



/*let heure = parseInt (prompt('Entrez l\'heure')); // parseInt convertit la donnée en entier
let minutes = parseInt (prompt('Entrez les minutes'));
let secondes = parseInt (prompt('Entrez les secondes'));


// on vérifie déjà que les heures minutes et sec sont possibles
if( (heure >= 0) && (heure <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)){
    secondes++; // ++ permet d'incrémenter d'une seconde 
    if(secondes == 60){
        secondes = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            heure++;
            if(heure == 24){
                heure = 0;
            }
        }
    }
    document.write('<h3> Dans une seconde il sera ' + heure + 'h' + minutes +'m' + secondes + 's </h3>')
} else{
    document.write('heure incorrecte !');
}*/

let resultat = document.getElementById('resultat');

function heureSuivante(){
    let heures = document.getElementById('heures').value;
    let minutes = document.getElementById('minutes').value;
    let secondes = document.getElementById('secondes').value;

    if( (heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) && (secondes >= 0) && (secondes <= 59)){
        secondes++; // ++ permet d'incrémenter d'une seconde 
        if(secondes == 60){
            secondes = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                heures++;
                if(heures == 24){
                    heures = 0;
                }
            }
        }
        resultat.innerHTML += '<h3> Dans une seconde il sera ' + heures + 'h' + minutes +'m' + secondes + 's </h3>';
    } else{
        resultat.innerHTML += 'heure incorrecte !';
    }
};
