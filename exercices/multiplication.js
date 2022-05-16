/*let number = parseInt(prompt("Entrez un nombre"));

let result = "";

for(let i=1; i<=10; i++){
    result = i * number;
}

tableDeMultiplication.innerHTML += number + " x " + i + " = " + result + "<br>";*/





// correction

// let choix = parseInt(prompt("choisis un nombre : "),10);

// if((choix>=2) && (choix<=9)){
//     for(let i = 1; i<=10 ; i++){
//         let res = choix * i ;
//         document.write (choix + "x" + i + " = " + res + '<br>');
//     }
// }else{
//     document.write("la valeur saisie doit être entre 2 et 9");
// }



// let resultat = document.getElementById('resultat');

// function multiplication(){

//     let saisieUtilisateur = document.getElementById('saisieUtilisateur').value;
    
//     if((saisieUtilisateur >= 2 ) && (saisieUtilisateur <= 9)){
//             for(let i = 1 ; i <= 10 ; i++){
//                 let res = saisieUtilisateur * i ;
//                 resultat.innerHTML = saisieUtilisateur + "x" + i + " = " + res + '<br>';
//             }
//         }else{
//             resultat.innerHTML += "la valeur saisie doit être entre 2 et 9";
//         }
        
// }

let saisieUtilisateur = document.getElementById('saisieUtilisateur');

document.getElementById('envoyer').addEventListener('click', function(){
    let resultatSaisi = saisieUtilisateur.value;
    console.log(resultatSaisi);

    if((resultatSaisi >= 2) && (resultatSaisi <= 9)){
            for(let i = 1; i <= 10 ; i++){
                let res = resultatSaisi * i ;
                document.write (resultatSaisi + "x" + i + " = " + res + '<br>');
            }
        }else{
            document.write("la valeur saisie doit être entre 2 et 9");
        }
        
})

// à mettre dans le cours fonctions
