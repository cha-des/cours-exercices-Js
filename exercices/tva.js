/*let resultat = document.getElementById("resultat");



    let montantHT  =  parseInt(prompt('saisissez un montant ht') 10 );

    let taxe = montantHT * 20 / 100;

    let montantTTC = montantHT+taxe;

    resultat.innerHTML = "Le montant TTC est de : " + montantTTC + "€."";


*/

//--------------------------------------------------------------------------------------------------


let resultat = document.getElementById("resultat"); // je crée la variable dans laquelle sera stocké le résultat que je souhaite afficher dans la partie prévue à cet effet dans le HTML


function tva(){

    let montantHT = document.getElementById('montantHT').value; //je crée une variable montantHT qui va stocker la valeur rentrée dans l'input par l'utilisateur

if( montantHT <= 0) {
    alert( "Saisir un montant supérieur à 0" )
}else{
    let montantTTC = (montantHT * 1.2) ;

    resultat.innerHTML = "Le montant TTC est de : " + montantTTC + "€."; // je demande l'affichage dans la fonction

    //return "Le montant TTC est de : " + montantTTC + "€."; // autre manière d'afficher le résultat
}  

}



// Number(document.getElementById('prixHT').value) // À tester
// parseFloat // À tester aussi 
