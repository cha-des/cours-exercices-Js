/**
 * DOM : Document Object Model
 * Le DOM est une interface interne au navigateur
 * Le DOM permet que chaque élément HTML (balises), chaques attributs (Tout ce qui est mis dans une balise ouvrante : href, alt, src, id, class,...) et chaque évènements (chargement de la page, click, mouseenter, mouseout, keypress, dbclick, ...) est un objet récupérable et manipulable en js
 */

//---------------------------
// Sélection par l'ID
//---------------------------

let sectionElem = document.getElementById('maSection');
console.log('Section' + sectionElem); // Ce qu'on récupère : [Section[object HTMLElement]


// Pour manipuler le css des éléments, on passe par l'atribut .style

sectionElem.style.backgroundColor = 'steelblue';
sectionElem.style.fontSize = '42px';
sectionElem.style.padding = '30px';
sectionElem.title = 'Un test';

//---------------------------------------------
// Sélection par le nom de la classe
//---------------------------------------------

let mesElemDiv = document.getElementsByClassName ('mesDivs');
console.log('Mes éléments div : ' + mesElemDiv);
console.log(mesElemDiv);

mesElemDiv[0].textContent = 'Nous sommes vendredi'; // [0] a permis de cibler le 1er élément des 4 qui ont la même classe


// quand on récupère une collection il faut faire une boucle

for (let i=0 ; i < mesElemDiv.length ; i++){ // .length permet de dire qu'il faut aller jusqu'à la fin du tableau, pas besoin de préciser qu'il y a 4 éléments + évite de devoir changer le nombre d'éléments si jamais on le change dans le HTML

    // style.cssText remplace et écrase  tout le contenu de l'attribut style 
    mesElemDiv[i].style.cssText = 'font-family : sans-serif; font-size : 21px; color : orange; background-color : lightblue; padding : 10px;';
    mesElemDiv[i].style.marginTop = '20px';
    mesElemDiv[i].setAttribute('title', 'hello titre');
}

// .setAttribute('nom_de_attribut', 'sa_valeur') // manipuler les attributs
// getAttribute('nom_de_attribut') // permet de récupérer la valeur de l'attribut


//---------------------------------------------
// Sélection par le nom de la balise
//---------------------------------------------

let mesElemP = document.getElementsByTagName('p');
console.log('Mes éléments p :' + mesElemP);//[object HTMLCollection]
console.log(mesElemP);

//#654815
let bgColor = 654815;

for (let y = 0 ; y < mesElemP.length ; y++){
    mesElemP[y].style.backgroundColor = "#"+ bgColor;
    mesElemP[y].style.padding = "20px";
    mesElemP[y].style.color = "white";

    bgColor += 2846; // en changeant la valeur de bgColor qui représente la valeur hexadécimal de l'élément, on change la couleur
    console.log(bgColor);
}

//---------------------------------------------------------------
// Sélection avec querySelector() & querySelectorAll()
//---------------------------------------------------------------

// querySelector() nous renvoie le 1er élément correspondant au sélecteur mis entre ()
// querySelectorAll() renvoie tous les éléments correspondant au selecteur mis entre ()

let premierElementP = document.querySelector('body p');
console.log('Le premier élément p : ' + premierElementP); // Le premier élément p : [object HTMLParagraphElement]
console.log(premierElementP);

let tousLesDivsEtP = document.querySelectorAll('div, p');
console.log('Tous les éléments div et p : ' + tousLesDivsEtP); // Tous les éléments div et p : [object NodeList]
console.log(tousLesDivsEtP);

//---------------------------------------------------------------
// Sélection cas particulier
//---------------------------------------------------------------

let idResultat = resultat; // déconseillé car pas clair mais peut arriver, faire un console.log si jamais un doute



/**
 * RESUME DES SELECTEURS
 * 
 * Sélection naturelle => id /document.body / document.head
 * 
 * Par son id => document.getElementById()
 * Par sa classe => document.getElementClassName()
 * Par sa balise => document.getElementTagName()
 * Par un sélecteur (css) => document.querySelector() ou document.querySelectorAll()
 * 
 *
 */