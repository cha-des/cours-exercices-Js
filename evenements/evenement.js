/**
 * 3 façons de mettre en place un évènement js :
 * 
 * Anciennement :
 * 1 - par un attribut html d'évènement exemple : onclick = ""
 * <di< onclick = "alert (hello)"> cliquez ici pour voir l'alerte </div>
 * 
 * 2 - par l'évènement directement en js
 * document.getElementById ('Un Id').onclick = function (){
 * // ..... code ....
 * }
 * 
 * 3 - La bonne pratique : on ajoute un écouteur d'évènement 
 * document.getElementById('Un Id').addEventListener('click', function(){
 * ...code....
 * })
 * 
 */

document.getElementById('div1').addEventListener('click', function(){

    //console.log('click');
    // dans un évènement le mot clé this représente l'élément ayant reçu l'évènement
    console.log(this.style.backgroundColor);

    let couleurActuelle = this.style.backgroundColor;

    if(couleurActuelle == 'cornflowerblue'){
        this.style.backgroundColor = 'red';
        this.style.width = '200px';
    }else if( couleurActuelle == 'red'){
        this.style.backgroundColor = 'orange';
        this.style.width = '150px';
    }else if( couleurActuelle == 'orange'){
        this.style.backgroundColor = 'purple';
        this.style.width = '200px';
    }else{
        this.style.backgroundColor = 'cornflowerblue';
        this.style.width = '100px';
    }

}); // fin de cet évènement

// Évènement DBLCLICK

document.getElementById('div2').addEventListener('dblclick', function(){
    let posTop = this.style.top;
    console.log(posTop);

    let posLeft = this.style.left;  
    console.log(posLeft); 

     if(posTop == '0px' && posLeft == '0px'){
         this.style.left = '100px';
     }else if(posTop == '0px' && posLeft == '100px'){
        this.style.top = '100px';
    }else if (posTop = '100px' && posLeft == '100px'){
        this.style.left = '0';
    }else{
         this.style.top = 'O';
     }

})

// Évènement mouseenter & mouseLeave

let listeImage = document.querySelectorAll('#blocImage1 img'); // ('#blocImage1 img') => je cible les images qui sont dans l'id blocImage1 => cela permet d'être très précis dans la selection

document.getElementById('blocImage1').addEventListener('mouseenter', function(){
    console.log('Je suis maouseenter');
    console.log(listeImage);
    listeImage[0].style.top = '0px';
    listeImage[1].style.top = '0px';

});

document.getElementById('blocImage1').addEventListener('mouseleave', function(){
    listeImage[0].style.top = '-360px'; // je décale du nombre de px déterminés dans le css
    listeImage[1].style.top = '-360px';
});

// Carousel

document.getElementById('changerImage').addEventListener('click', function(e){
    // Le fait de mettre un argument de réception dans la fonction qui se déclenche permet de récupérer l'évènement. Cela nous permet ensuite de le bloquer.
    e.preventDefault(); // .preventDefault permet d'annuler un événement (dans ce cas bloque le rechargement de la page lors du clic).

    let imageEnCours = document.getElementById('blocImage2').getAttribute('data-image'); // .getAttribute permet d'aller chercher l'attribut html
    console.log(imageEnCours);

    // Les images sont toutes présentes, elles sont superposées et sont toutes transparentes sauf une

    if(imageEnCours == 'image1'){
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image2');
    }else if(imageEnCours == 'image2'){
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image3');
    }else if (imageEnCours == 'image3'){
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image4');
    }else if(imageEnCours == 'image4'){
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image5').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image5');
    }else{
        document.getElementById('image5').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image1');
    }

});

// Pour déclancher une fonction selon un timer setInterval(la_fonction, timer_milliseconde)
// Une fonction de retour (callback) est une fonction comme les autres. Sa particularité est qu'elle est appelée par une autre qui l'a reçu en tant que paramètre (argument)
// On souligne que lorsqu'on passe une fonction en paramètre, on donne juste son nom pas de () car elle est en argument de l'autre fonction

let animationCarousel = setInterval(activeCarousel, 2000);

function activeCarousel(){
    let imageEnCours = document.getElementById('blocImage2').getAttribute('data-image'); 
    console.log(imageEnCours);


    if(imageEnCours == 'image1'){
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image2');
    }else if(imageEnCours == 'image2'){
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image3');
    }else if (imageEnCours == 'image3'){
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image4');
    }else if(imageEnCours == 'image4'){
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image5').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image5');
    }else{
        document.getElementById('image5').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
        document.getElementById('blocImage2').setAttribute('data-image', 'image1');
        clearInterval(animationCarousel); // permet d'arrêter le setInterval 
    }
}

