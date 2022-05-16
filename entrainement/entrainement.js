//commentaire sur une ligne
/**commentaire sur 
 * plusieurs 
 * lignes
 */

// ECMAScript est un ensemble de normes concernant le langage JS notamment
// JS est exécuté par le navigateur via une interface interne au navigateur

// window est un outil Js qui représente une fenêtre (onglet) du navigateur contenant un document web 
// document est un outil js qui représente la page web chargée par le navigateur (notre script complet)

// finir toutes les instructions par un point virgule (;)

// Pour voir les erreurs js, elles sont visibles dans la console navigateur au niveau de l'onglet console du inspecter

// Le document nous permet d'aller chercher n'importe quel élément HTML de notre page pour le manipuler en js

//document.getElementById('contenuChapitre1'); cette instruction permet d'aller chercher l'élément html ayant l'id contenuChapitre1

//document.getElementById('contenuChapitre1').TextContent = "du texte" permet de modifier le contenu texte de l'élément

//document.getElementById('contenuChapitre1').innerHTML = "<p> du texte</p>" permet de modifier le contenu texte et html de l'élément (voir la partie 2 du cours pour une explication complète sur les sélecteurs)

//----------------------------------
// Chapitre 1 : Affichage
//----------------------------------

// Boîtes de dialogue

// alert('bonjour à tous'); // permet d'afficher un message à l'utilisateur//

// confirm('êtes-vous sûr ?'); // permet de récupérer une confirmation de l'utilisateur (ok / annuler)

// prompt('Quel est votre prénom ?'); // permet de récupérer une saisie utilisateur

// Affichage dans la console du navigateur 
console.log('une info visible dans la console'); 

// Affichage dans le document web
// On passe par un sélecteur pour récupérer un élément html de notre page afin de le manipuler

document.getElementById('contenuChapitre1').textContent = '<h3>Bonjour à tous<h3/>'; // textContent permet de manipuler le contenu d'un élément, si on de l'html dans le texte il ne sera pas interprété

// document.getElementById('contenuChapitre1').innerHTML = document.getElementById('contenuChapitre1').innerHTML + '<h3>Bonjour à tous<h3/> 

// innerHTML nous permet de gérer le contenu texte et/ou de l'html qui sera interprété par le navigateur. Le fait de dire qu'il est égal à lui même et qu'on ajoute un nouveau contenu permet de ne pas écraser l'existant

// Si je ne met pas le + il va écraser l'instruction précédente

// innerHTML permet l'interprétation des balises

document.getElementById('contenuChapitre1').innerHTML += '<h3 style="color:red"> Hello world <h3/>'; 

//---------------------------------------------------
// Chapitre 2 : variables déclaration et affectation
//---------------------------------------------------

// Une variable est un espace nommé permettant de conserver une valeur. Une valeur possède un type, on parle de type primitif ou de pseudo type

// Caractères autorisés : les caractères alphanum sauf caractères spéciaux. Le js est sensible à la casse : une majuscule n'est pas la même chose qu'une minuscule
// Une variable ne peut pas commencer par un chiffre

//----------------------------
// Déclaration avec var
//----------------------------

// Déclaration : 
var maBoite; // déclaration d'une variable nommée maBoite

// Affectation :
maBoite = 10; // affectation de la valeur 10 dans la variable maBoite

// Déclaration et affectation sur la même ligne
// On a récupéré l'élément html pour le placer dans la variable elementChapitre2
var elementChapitre2 = document.getElementById('contenuChapitre2');
console.log(elementChapitre2);

elementChapitre2.innerHTML = '<p>Une variable est un espace nommé permettant de conserver une valeur<p/>';

elementChapitre2.innerHTML += '<p>Une valeur possède un type, on parle de type primitif ou de pseudo type</p>';

//--------------------------------
// Déclaration avec let
//--------------------------------

let autreVariable = 'du texte';
console.log(autreVariable);

// Différence entre var et let

// Une variable déclarée avec var est disponible dans tout le code (sauf si elle est déclarée dans une fonction)
// Une variable déclarée avec let n'existe que dans le bloc où elle a été déclarée. Un bloc en js est représenté par des acolades {}

//if(condition){//bloc}
//while(condition){//block}
//function truc(){//block}
//{(block)}

{
    let testLet = 'un test'
    console.log('valeur de la varibable testLet dans le même bloc : ' + testLet);
}

// consol.log('valeur de la varibable testLet en dehors du bloc :' + testLet); message d'erreur dans la console car la variable est non définie

// autre différence : à l'inverse de var, avec let on ne peut pas redéclarer la même variable dans un même bloc

var test1 = 123;
var test1 = 456;

// ce n'est pas possible avec let

// -----------------------------
// Déclaration avec const
// -----------------------------

// même comportement sauf 2 points principaux :
// avec const on doit affecter la valeur lors de la déclaration obligatoirement
// une variable déclarée avec const est constante, on ne peut pas modifier sa valeur lors de l'exécution du script

const maConstante = 'une valeur';
//maConstante = 'une autre valeur'; 
// message d'erreur car ce n'est pas possible d'affecter une autre valeur à const

//-------------------------------------
// Chapitre 3 : type de données
//-------------------------------------

// En Js on récupère des outils du langage selon leur type (type primitif = string, number, boolean, null, undefined, symbol) de la donnée qu'on récupère.

// typeof est opérateur du langage qui nous permet de connaitre le type de valeur

let elementChapitre3 = document.getElementById('contenuChapitre3');

let chaine = 'du texte'; // type string
elementChapitre3.innerHTML = 'Le type contenu dans la variable nommée chaine : ' + typeof chaine + '<br>';

let numerique = 123; // type number
elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée chaine : ' + typeof numerique + '<br>';

let autreChaine = '123'; // type string aussi car 123 mis entre ''
elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée chaine : ' + typeof autreChaine + '<br>';
 //'123' est un type string mais sa valeur est numérique  

 let negatif = -7; // type number
 elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée chaine : ' + typeof negatif + '<br>';

 let decimal = 5.9; // type number
 elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée chaine : ' + typeof decimal + '<br>';

 let choix = true; // type boolean deux valeurs possibles : true / false
 elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée chaine : ' + typeof choix + '<br>';

// une variable qui n'existe pas car non déclarée ou une variable déclarée sans affectation est de type undefined
 elementChapitre3.innerHTML += 'Le type contenu dans la variable nommée existePas : ' + typeof existePas + '<br>';


//------------------------------
// Chapitre 4 : Les quotes
//------------------------------

let elementChapitre4 = document.getElementById('contenuChapitre4');

// Les quotes servent à représenter les chaines de caractères dans le code

elementChapitre4.innerHTML = 'Hello <br>'; // '' ou "" aucune différences
elementChapitre4.innerHTML += "Il fait beau aujourd'hui <br>"; // pas besoin d'échapper l'apostrophe
elementChapitre4.innerHTML += 'Il fait beau aujourd\'hui <br>'; // ici je doit mettre l'antislash pour echapper

// Les quotes inversées (accent grave ou backtick)
let prenom = 'Marie';
elementChapitre4.innerHTML += 'Bonjour ${prenom} <br>' ;
elementChapitre4.innerHTML += `Bonjour ${prenom} <br>`;
// l'utilisation du gabarit ${} permet d'aller chercher la valeur de cette variable 
// avec la concaténation 
elementChapitre4.innerHTML += 'Bonjour' + ' ' +  prenom + '<br>' ;

// les <br> doivent entre '' car c'est une chaine de caractère pour Js


//----------------------------------
// Chapitre 5 : concaténation
//----------------------------------

// La concaténation permet d'assembler des chaines de caractères représentées notamment via du texte ou des variables
// Le caractère de concaténation est le signe + quel 'on peut traduire par "à la suite de "

let prenom2 = 'Pierre';
let nom2 = 'Dupont';

let elementChapitre5 = document.getElementById('contenuChapitre5');

elementChapitre5.innerHTML = 'Bonjour ' + prenom2 + ' ' + nom2 + ' bienvenue sur notre site ! <hr>';

elementChapitre5.innerHTML += `Bonjour ${prenom2} ${nom2}`;

//------------------------------------------
// Chapitre 6 : opérateur arithmétiques
//------------------------------------------

let elementChapitre6 = document.getElementById('contenuChapitre6');

let result = 10 + 5; //15
elementChapitre6.innerHTML = result + '<br>'; 

result = 10 - 5; // 5
elementChapitre6.innerHTML += result + '<br>'; 

result = 10 / 5; // 2
elementChapitre6.innerHTML += result + '<br>'; 

result = 10 * 5; // 50
elementChapitre6.innerHTML += result + '<br>'; 

result = 10 % 5; // 0 Modulo est le reste de la division
elementChapitre6.innerHTML += result + '<br>'; 

result = 10 ** 5; // 100 000 ** est la puissance
elementChapitre6.innerHTML += result + '<br>'; 

// -----------------------------------------
// Chapitre 7 : Les conditions
// -----------------------------------------

let elementChapitre7 = document.getElementById('contenuChapitre7');

// Une condition permet de prévoir différents cas possibles
// Une condition ne peut recevoir qu'une réponse de type boolean (true / false)

let a = 10, 
    b = 5,
    c = 2; // déclaration et affectation de 3 variables en même temps

if( a > b ){ // si la valeur de la variable a est supérieure à la valeur de la variable de b
    elementChapitre7.innerHTML = ' <p> la valeur de a est strictement supérieure à la valeur de b </p>';
} else{ // sinon toutes les autres possibilités
    elementChapitre7.innerHTML = ' <p> la valeur de a n\'est pas supérieure à la valeur de b </p>';
}

if ( a > b && b > c) { // il faut que les deux conditions soient vraies
    elementChapitre7.innerHTML += '<p> Ok pour les deux conditions </p>';
}else {
    elementChapitre7.innerHTML += '<p> Une des deux conditions ou les deux sont fausses </p>';
}

// L'une ou l'autre d'un ensemble de conditions : OR ||

if (a == 9 || b > c ) {
    elementChapitre7.innerHTML += '<p> Ok pour au moins une des deux conditions </p>';
}else{
    elementChapitre7.innerHTML += '<p> Les deux conditions sont fausses </p>';
}

// true / false

let test = true;
// on attend vrai pour appliquer la condition

if (test) {
    elementChapitre7.innerHTML += ' on rentre dans le if <br>';
}

test = false;
if( !test) { // avec le ! qui veut dire (différent de) on attend la valeur false pour rentrer dans le if
    elementChapitre7.innerHTML += ' on rentre dans le if <br>';
}

// on devrait plutôt écrire de cette manière la négation
if ( test == false) {
    elementChapitre7.innerHTML += ' on rentre dans le if <br>';
}

let var1 = 1; //type number
let var2 = '1'; //type string

// comparaison des valeurs
if (var1 == var2){
    elementChapitre7.innerHTML += '<p> var1 a la même valeur que var2</p>'; // == on compare seulement les valeurs
}else {
    elementChapitre7.innerHTML += '<p> var1 et var2 sont des valeurs différentes</p>';
}

// comparaison des valeurs et des types
if (var1 === var2){
    elementChapitre7.innerHTML += '<p> var1 a la même valeur que var2</p>'; // === on compare les valeurs et le type
}else {
    elementChapitre7.innerHTML += '<p> var1 et var2 ont des valeurs ou des types différents</p>';
}

   /*
Les opérateurs de comparaison
-----------------------------
=       affectation (ce n'est pas une comparaison)
==      est égal à (comparaison des valeurs uniquement)
===     est strictement égal à (comparaison des valeurs et des types)
!=      est différent de (comparaison uniquement des valeurs)
!==     est strictement différent de (comparaison des valeurs et des types)
>       strictement supérieur
>=      supérieur ou égal
<       strictement inférieur
<=      inférieur ou égal 
*/

//isNaN() is not a number

//let var1 = 1; //type primitif number
//let var2 = '1'; //type string

if(isNaN(var1)){
    elementChapitre7.innerHTML +='<p> var1 n\'a pas une valeur numérique </p>';
}else{
    elementChapitre7.innerHTML +='<p> var1 a une valeur numérique </p>'; //var1 a une valeur numérique donc je rentre ds le else
}

if(isNaN(var2)){
    elementChapitre7.innerHTML +='<p> var2 n\'a pas une valeur numérique </p>';
}else{
    elementChapitre7.innerHTML +='<p> var2 a une valeur numérique </p>'; //var2 a une valeur numérique donc je rentre ds le else
}

// condition switch(){.....}

elementChapitre7.innerHTML += '<p> Autre outil pour mettre en place des conditions : switch()</p>';

let couleur = 'jaune';

switch(couleur){
    case 'bleu' : 
        elementChapitre7.innerHTML += '<p>vous aimez le bleu</p>';
        break; // permet de sortir du switch si la donnée est bleue

        case 'rouge' : 
        elementChapitre7.innerHTML += '<p>vous aimez le rouge</p>';
        break;

        case 'vert' : 
        elementChapitre7.innerHTML += '<p>vous aimez le vert</p>';
        break;

        default:
            elementChapitre7.innerHTML += '<p>vous n\'aimez ni le bleu, ni le rouge, ni le vert!!!!!</p><hr>';
            break;
}

//exercice : réecrire la même condition avec des if / else if / else


let couleur2 = 'jaune';

if(couleur2 == 'bleu'){
    elementChapitre7.innerHTML += '<p>vous aimez le bleu</p>';

}else if(couleur2 == 'vert'){
    elementChapitre7.innerHTML += '<p>vous aimez le vert</p>'; 

}else if(couleur2 == 'rouge'){
    elementChapitre7.innerHTML += '<p>vous aimez le rouge</p>';

}else{
    elementChapitre7.innerHTML += '<p>vous n\'aimez ni le bleu, ni le rouge, ni le vert</p>'; 
}

// -----------------------------
// Chapitre 8 : Les boucles 
// -----------------------------

let elementChapitre8 = document.getElementById('contenuChapitre8');

// Une boucle permet de répéter un ensemble d'instructions selon une condition d'entrée.
// 3 infos sont nécessaires :
// 1- valeur de départ (compteur)
// 2- condition d'entrée basée sur la valeur du compteur
// 3- l'incrémentation ou décrémentation (le pas)

// Boucle while(){...} -- Tant que

let i = 0; // valeur de départ

while(i<10){ // condition d'entrée
    elementChapitre8.innerHTML += i + '<br></br>';
    i++; // demande d'incrémenter la valeur de i de 1 à chaque tour de boucle (i = i + 1)
}

elementChapitre8.innerHTML += '<hr></hr>';

// Bouble for(){....}
// for(valeur_de_départ ; condition_d'entrée ; incrémentation){...}

for(i = 0 ; i < 10 ; i++){
    elementChapitre8.innerHTML += i + ' - ';
}

elementChapitre8.innerHTML += '<hr></hr>';

for(i=0 ; i<10 ; i++){
  if (i != 9){
    elementChapitre8.innerHTML += i + ' - ';
  }else{
    elementChapitre8.innerHTML += i;
  }
}

// Exercice : faire une boucle qui affiche de 0 à 99 (100 tours), en revanche le chiffre 50 doit être de couleur rouge !
// Avec des balises html

elementChapitre8.innerHTML += '<hr></hr>';

for(i = 0 ; i<100 ; i++){
    if (i == 50){
        elementChapitre8.innerHTML += '<span style=color:red;>' + i + '</span>'; // Ici on utilise un span mais ça aurait marché avec n'importe quelle balise html
    }else{
        elementChapitre8.innerHTML += i; 
    }
}

/*i=0;

while(i<100){

    if (i==50){
        elementChapitre8.innerHTML += '<span style=color:red;>' + i + '</span>';
    }else{
        elementChapitre8.innerHTML += i;
    }
    i++
}*/






// ---------------------------------------------------------------
// Chapitre 9 : Les fonctions prédéfinies (fonctions globales)
// ---------------------------------------------------------------

let elementChapitre9 = document.getElementById('contenuChapitre9');

// Une fonction prédéfinie est déjà inscrite au langage, le développeur ne fait que l'exécuter, à l'inverse d'une fonction utilisateur qui sera créée par le développeur et ensuite exécutée.

// parseInt(chaine, base)
// parseInt() est une fonction permettant de transformer une chaine de caractères en un chiffre entier de type number
// l'argument chaine : la chaine à traiter pour la transformer en type number 
// l'argument base : la base arythmétique (base 10 pour les chiffres de 0 à 9)
// valeur de retour : un number ou NaN (not a number)

let uneChaine = '123';

elementChapitre9.innerHTM += '<p> La chaine est de type' + typeof uneChaine + ' ' +' </p>';

// valeur numérique 123 de type string
uneChaine = parseInt(uneChaine, 10);

elementChapitre9.innerHTML += '<p> La chaine est traitée avec un parseInt est de type :' + ' ' + typeof uneChaine + '</p>';


// ---------------------------------------------
// Chapitre 10 : fonctions utilisateurs 
// ---------------------------------------------

let elementChapitre10 = document.getElementById('contenuChapitre10');

// Déclaration d'une fonction : méthode function statment

function maFonction(){
    // Une fonction simple sans argument qui renvoie une chaine de caractères
    return "Bonjour à tous <h>";
}

// Exécution de la fonction :

elementChapitre10.innerHTML += maFonction() + '<br>'; // 1ère exécution
elementChapitre10.innerHTML += maFonction() + '<br>'; // 2ème exécution
elementChapitre10.innerHTML += maFonction() + '<br>'; // 3ème exécution
// Permet de répéter une fonction quand on en a besoin dans le code

// Fonctions avec argument
// Cette fonction permet d'afficher du texte pour dire bonjour à un utilisateur selon son pseudo que l'on récupère en argument

function direBonjour(qui){
    return 'Bonjour ' + qui +',' + ' bienvenue sur notre site <hr>';
}

elementChapitre10.innerHTML += direBonjour('charlotte'); // Si la fonction attend un argument, il faut le lui fournir au moment de l'exécution. Cet argument va se placer dans l'argument de réception prévu (dans notre cas 'qui') afin de permettre une bonne exécution du code de la fonction.

//let p = prompt('quel est votre prénom ?');
//elementChapitre10.innerHTML += direBonjour(p);

// function pour afficher 3 <hr> dans la page

function separateur(sectionConcernee){ // section concernee représente le bloc où l'on veut faire l'affichage
    return sectionConcernee.innerHTML += '<hr> <hr> <hr>';
    sectionConcernee.innerHTML += 'hello'; // après un return cette ligne ne sera jamis exécutée
}

separateur(elementChapitre10);

/*function meteo(saison, temperature){
    let debut = ' Nous sommes en ' + saison + ' ';
    let suite = 'et il fait ' + temperature + ' degrés';

    return debut + suite + '<hr>';
}

elementChapitre10.innerHTML += meteo('été', 32);
elementChapitre10.innerHTML += meteo('hiver', 5);
elementChapitre10.innerHTML += meteo('printemps', 22);
elementChapitre10.innerHTML += meteo('automne', 15);*/

// Exercice : gérer le 'en' ou le 'au' selon la saison et le (s) sur degré selon la température


/*function meteo2(saison, temperature){
    let debut = ' Nous sommes en ' + saison + ' ';
    let suite = 'et il fait ' + temperature + ' degrés';


    if(saison == 'printemps'){ 
        debut = 'Nous sommes au ' + saison + ' ';
    }else{
        debut = 'Nous sommes en ' + saison + ' ';
    }

    if(temperature > 1){
        suite = 'et il fait ' + temperature + ' degrés ';
    }else{
        suite = 'et il fait ' + temperature + ' degré ';

    return debut + suite + '<hr>';
    }

}

    elementChapitre10.innerHTML += meteo2('été', 32);
    elementChapitre10.innerHTML += meteo2('hiver', 5);
    elementChapitre10.innerHTML += meteo2('printemps', 22);
    elementChapitre10.innerHTML += meteo2('automne', 15);*/

function meteo3(saison, temperature){
    let debut = ''; // ces variables sont à l'intérieure d'une fonction, en dehors elles n'existent pas
    let suite = '';

    if(saison == 'printemps'){
        debut = 'Nous sommes au ' + saison + " ";

    }else{
        debut = 'Nous sommes en ' + saison + ' ';
    }

    if( temperature >= -1 && temperature <= 1){
        suite = ' et il fait ' + temperature + ' degré'; 
    }else{
        suite = ' et il fait ' + temperature + ' degrés'; 
    }

    return debut + suite + '<hr>';

    }

    elementChapitre10.innerHTML += meteo3('été', 32);
    elementChapitre10.innerHTML += meteo3('hiver', 0);
    elementChapitre10.innerHTML += meteo3('printemps', -5);
    elementChapitre10.innerHTML += meteo3('automne', 15);

    separateur(elementChapitre10);


function factureEssence(nbLitre){
    return 'vous devez régler la somme de ' + nbLitre + 2 + '€ <br>';
    }

   
elementChapitre10.innerHTML += factureEssence(50)



// Autre façon de déclarer une fonction : function operator

let maFonction2 = function(){
    return 'hello ! <br>';
}

elementChapitre10.innerHTML += maFonction2 (); // il faut que la fonction soit déclarée avant son exécution

// aler(info); // undefined
// let info = 1223; // je ne peux pas appeler une variable avant de l'avoir déclarée


separateur(elementChapitre10);

elementChapitre10.innerHTML += '<b> Environnement Global et local <br></br> </b>';

// l'environnement global représente l'intégralité de notre script
// l'environnement local est à l'intérieur d'une fonction

// lorsque l'on déclare une variable dns une fonction avec var ou let, cette variable n'existe que dans cette fonction

let animal = ' chaton'; // ici je déclare une variable en dehors de la fonction

function foret(){
    let animal = ' loup'; // je déclare une variable qui a le même nom mais dans la fonction donc il s'agit de deux fonctions différentes
    return animal;
}

elementChapitre10.innerHTML += animal + '<br>'; // affiche chaton
foret();
elementChapitre10.innerHTML += animal + '<br>'; // affiche chaton
elementChapitre10.innerHTML += foret() + '<br>'; // affiche loup


// L'inverse

let vehicule = 'velo';

function rouler(){
    vehicule = 'voiture'; // je ne déclare pas de nouvelle fonction 
    return vehicule;
}
elementChapitre10.innerHTML += vehicule + '<br>'; // affiche velo car la fonction n'est pas exécutée

rouler();
elementChapitre10.innerHTML += vehicule + '<br>'; 

// Attention une variable déclarée avec let n'existera que dans les {} où elle est déclarée


//-------------------------------------------------
// Chapitre 11 : les tableaux de données ARRAY
//-------------------------------------------------

let elementChapitre11 = document.getElementById('contenuChapitre11');

// Un tableau array est un peu comme une variale sauf su'au lieu de contenir une seule valeur on peut avoir un ensemble de valeurs. C'est un nouveau type de donnée.

// Pour déclarer un tableau array, on met les []
            //      0        1        2         3         4       5
let tabFruits = ['pomme', 'poire', 'cerise', 'ananas', 'kiwi', 'pêche'];
//console.log(tabFruits);

// Pour afficher l'intégralité du tableau : 

elementChapitre11.innerHTML += tabFruits + '<br>';

elementChapitre11.innerHTML += tabFruits[2]; + '<br>';

separateur(elementChapitre11);

tabFruits[2] = 'mangue'; // pour modifier une valeur d'un tableau on la redéfinie comme une variable
//console.log(tabFruits);
elementChapitre11.innerHTML += tabFruits[2]; + '<br>'; // affiche mangue

// Pour connaître la taille du tableau (nb d'éléments contenus) : lenght. c'est une propriété accessible en lecture seule

elementChapitre11.innerHTML += 'taille du tableau = ' + tabFruits.length+ '<br>';

// Pour rajouter un élément en fin de tableau : la méthode .push()
// .pop() supprime le dernier élément du tableau

tabFruits.push('banane');
elementChapitre11.innerHTML += tabFruits + '<br>';

// Pour rajouter un élément au début du tableau : la méthode .unshift
// .shift supprime le premier élément du tableau

tabFruits.unshift('orange');
elementChapitre11.innerHTML += tabFruits + '<br>';

elementChapitre11.innerHTML += '<b>tableau de données array multidimensionnel<br></b>'; // un ou des tableaux dans des tableaux

let personne = [
    ['Marie', 'Dupont', 'marie@mail.fr <br>'],
    ['John', 'Dupont', 'john@mail.fr <br>'],
    ['Camille', 'Dupont', 'camille@mail.fr <br>']
    
];

elementChapitre11.innerHTML += personne + '<br>';

elementChapitre11.innerHTML += personne[0][2] + '<br>'; // affiche le mail de marie

// --------------------------------------------------------------------
// Boucle for (..... In .....) Pour les tableaux array et les objets
// --------------------------------------------------------------------

let tabJours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

console.log(tabJours);

for( let indice in tabJours){
    elementChapitre11.innerHTML += '-' + tabJours[indice] + '<br>';
}

// let indice représente l'indice en cours à chaque tour de boucle, la boucle for in va tourner autant de fois qu'il y a d'élements dans le tableau concerné.
// for in va itérer au niveau des indices, si je veux afficher la valeur existante à un indice donné il faudra donc que je fasse tabJours[indice]

// --------------------------------------------------------------------
// Boucle for (.... of .....) Pour les tableaux array et les objets
// --------------------------------------------------------------------

separateur(elementChapitre11);

for( let valeur of tabJours){
    elementChapitre11.innerHTML += '-' + valeur + '<br>';
}

// let valeur représente la valeur en cours à chaque tour de boucle. La boucle for of va tourner autant de fois qu'il y a d'éléments dans le tableau concerné.
// let valeur itère au niveau des valeurs, si je veux afficher la valeur existante je passe par un affichage direct 



//-------------------------------------------------
// Chapitre 12 : les objets globaux
//-------------------------------------------------


let elementChapitre12 = document.getElementById("contenuChapitre12");


// Un objet est un conteneur permettant de conserver des infos (propriétés ou attributs d'objets) ainsi que du fonctionnel (methodes de l'objet)
// Une variable simple => infos
// Un tableau Array => ensemble d'infos
// Un objet => propriétés et méthodes ( = variables et fonctions )

// Une valeur Js est un objet car il hérite de l'objet global correspondant à son type primitif
// exemple : une chaîne de caractères va hériter des propriétés et méthodes de l'objet global string

//------------------------------
// Objet global String
//------------------------------

// cette variable phrase contient du texte. En réalité c'est un objet Js qui hérite de la propriéte et des méthodes de l'objet global string

// Une seule propriété pour les objets string : .length => longueur de la chaîne

let phrase = "Bonjour nous sommes mercredi, il fait beau";
elementChapitre12.innerHTML += phrase + '<br>';

elementChapitre12.innerHTML += 'taille de la chaine : ' + phrase.length + '<br>';

// .indexOf est une méthode permettant de chercher la position d'un caractère ou d'une chaîne de caractère dans une autre chaîne
// si le caractère ou la chaine est trouvée on obtient un chiffre, c'est la position, sinon on obtient -1 car ce qu'on cherche n'est pas présent

let positionMercredi = phrase.indexOf('mercredi');
console.log(positionMercredi); //20

// attention .indexOf() nous renvoie la position du 1er caractère de ce qu'il cherche, en revanche la position du 1er caractère de la chaine est la position 0. Sinon on obtient -1 car ce que l'on cherche n'est pas présent

// .substring() permet de découper une chiane en fournissant un ou deux arguments 
// avec un argument, celui-ci représente la position de départ où l'on coupe et on récupère tout le reste de la chaine depuis cette position
// avec deux arguments le 1er représente la position de départ et le second représente la position de fin de ce que l'on veut découper

let positionDepart = phrase.indexOf('mercredi');
let positionFin = phrase.indexOf('mercredi') + 'mercredi'.length;

let mot = phrase.substring(positionDepart, positionFin);
elementChapitre12.innerHTML += '<hr>' + mot + '<hr>';

// .toLowerCase() pour passer la chaine en minuscule
// .toUpperCasse() pour passer une chaine en majuscule

let maj = "BONJOUR";
let min = " à tous";

elementChapitre12.innerHTML += maj.toLowerCase() + '<hr>';

elementChapitre12.innerHTML += min.toUpperCase() + '<hr>';

// ------------------------------------
// Objet global Math
// ------------------------------------

// outil pour faire des opérations mathématiques

separateur(elementChapitre12);

elementChapitre12.innerHTML += '<b> Objet global Math : </b><br>';

// Méthode pour arrondir à l'entier inférieur : Math.floor()

elementChapitre12.innerHTML += 'La valeur 7.9 avec la méthode Math.floor() : ' + Math.floor(7.9) + '<br>' ;


// Méthode pour arrondir à l'entier supérieur : Math.ceil()

elementChapitre12.innerHTML += 'La valeur 7.1 avec la méthode Math.ceil() : ' + Math.ceil(7.1) + '<br>' ;// Méthode pour arrondir à l'entier supérieur : Math.ceil()

// Méthode pour arrondir à l'entier le plus proche : Math.round()

elementChapitre12.innerHTML += 'La valeur 6.1 avec la méthode Math.round() : ' + Math.round(6.1) + '<br>' ; //6
elementChapitre12.innerHTML += 'La valeur 7.9 avec la méthode Math.round() : ' + Math.round(7.9) + '<br>' ; //8
elementChapitre12.innerHTML += 'La valeur 7.5 avec la méthode Math.round() : ' + Math.round(7.5) + '<br>' ; //8

// ------------------------------------
// Objet global Date
// ------------------------------------

// outil pour faire des manipulations de dates

separateur(elementChapitre12);

elementChapitre12.innerHTML += '<b> Objet global Date : </b><br>';

// l'opérateur new permet de créer un nouvel objet à partir d'un constructeur qui existe de manière native ou définit par l'utilisateur
// Pour la manipulation de l'objet global Date nous devons passer par le mot clé new

let aujourdhui = new Date(); // toujours stocker new Date dans une variable qui aura accès aux propriétés de l'objet
console.log(aujourdhui);

// pour avoir l'année en 4 chiffre
elementChapitre12.innerHTML += 'année en cours : ' + aujourdhui.getFullYear() + '<hr></hr>';

// pour avoir le numéro du jour dans le mois
elementChapitre12.innerHTML += 'numéro du jour dans le mois : ' + aujourdhui.getDate() + '<hr></hr>';

// pour avoir le numéro du jour dans la semaine (le numéro 0 correspond au dimanche)

var tabJour = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']; //tableau

elementChapitre12.innerHTML += 'numéro du jour dans la semaine : ' +  aujourdhui.getDay() + '<hr></hr>';

elementChapitre12.innerHTML += 'jour dans la semaine : ' + tabJour[aujourdhui.getDay()] + '<hr></hr>'; 

// pour avoir le numéro du mois dans l'année (le numéro 0 correspond à janvier)
elementChapitre12.innerHTML += "numéro du mois dans l'année : " +  aujourdhui.getMonth() + '<hr></hr>';

// pour afficher la date du jour au format français = jj/mm/aaaa

let numJour = aujourdhui.getDate();
let numMois = aujourdhui.getMonth() + 1; // car on démarre à O or je veux démarrer à 1
let numAnnee = aujourdhui.getFullYear();

// Exercice : afficher le 0 devant le numéro du jour et du mois lorsque nécessaire

elementChapitre12.innerHTML += "nous sommes le : " +  numJour + '/' + numMois + '/'+ numAnnee + '<hr></hr>';

// ----------------------------------
// Chapitre 13 : Les objets
// ----------------------------------

let elementChapitre13 = document.getElementById('contenuChapitre13');

//  pour  créer un tableau array : []
// pour créer un objet : {}

let monObjet = {}; // création d'un objet

elementChapitre13.innerHTML += 'type de la variable monObjet : ' + typeof monObjet + '<hr></hr>'; // object

//remplissage de l'objet avec le .
monObjet.pseudo = 'admin'; 

//autre syntaxe possible 
monObjet['mail'] = 'admin@mail.fr'; 

console.log(monObjet);

// Création et remplissage d'un objet

let objetProduit = {
    // Propriétés
    titre : 'Jean',
    categorie : 'pantalon',
    prix : 80,
    couleur : ['rouge', 'bleu', 'blanc', 'noir', 'gris'],
    promotion : false,
    stock : 50,
    tva : 20,

    // méthode pour calcule le prix TTC
    calculTTC : function(){
        // this représente l'élément en cours, ici ça représente l'objet objetProduit

        return this.prixTTC = this.prix * ( 1 + (this.tva /100) ); // ne pas oublier le return pour récupérer le résultat
    },

    // méthode pour mettre le stock à jour
    caclculStock : function(quantite){
        return this.stock = this.stock - quantite; // quantité que j'aurai récupéré comme argument de la méthode
    }

}; // fin de déclaration avec ;

elementChapitre13.innerHTML += 'Bonjour le produit est ' + objetProduit.titre + ', catégorie : ' + objetProduit.categorie + '<hr>';

elementChapitre13.innerHTML += 'Prix : ' + objetProduit.prix + '€ HT, le prix TTC est de : ' + objetProduit.calculTTC() + ' € TTC ' + '<hr>';

elementChapitre13.innerHTML += 'Le stock disponible : ' + objetProduit.stock + '<hr>';

objetProduit.caclculStock(3);
elementChapitre13.innerHTML += 'Le stock disponible après mise à jour : ' + objetProduit.stock + '<hr>';

elementChapitre13.innerHTML += 'Première couleur disponible de ce produit : ' + objetProduit.couleur[0] + '<hr>';

for( let varieteCouleur of objetProduit.couleur){
    elementChapitre13.innerHTML += '- ' + varieteCouleur + '<br>';
}

// ------------------------------------
// Bonus : Méthode map()
// ------------------------------------

// Va permettre de retourner un nouveau tableau sur lequel on aura appliqué des modifs sur chacun des éléments

let arr = [1, 2, 3, 4, 5]; 

// map() va prendre en argument une fonction, c'est ce qu'on appelle une fonction callback
// Définition : une fonction de rappel aussi appelée callback est une fonction placée dans une autre fonction en tant qu'argument

// let arrPlusUnF = arr.map(nombre => nombre + 1) 
// Un fonction fléchée lorsqu'elle n'a pas d'argument doit alors reprendre ses parenthèses ()=>


let arrPlusUn = arr.map(function(nombre){ // cette fonction anonyme est une fonction sans nom qui ne peut pas être appelée pour être exécutée
    console.log(nombre);
    return nombre + 1;
})

console.log(arrPlusUn);
