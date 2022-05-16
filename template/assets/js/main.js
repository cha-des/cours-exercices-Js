// un script qui permettre d'écouter l'élément scroll
//si le scroll vertical est supérieur à 500 px je fais apparaître une flèche
// flèche = div avec icone fontawesome
// cette div disparaît si le vertical est inférieur à 500px
// display: none; ou display: block;

window.addEventListener('scroll', function(){ // window signifie que je cible la fenêtre et non un élément html
    if(window.scrollY > 500){ // scrollY signifie le scroll vertical
        document.getElementById('back-to-top').style.display = 'block'; // .style.display = 'block' => il a son comportement normal
    }else{
        document.getElementById('back-to-top').style.display = 'none'; // Ici 'none' => le fait disparaître
    }
});

let mesThumbnails = document.querySelectorAll('.thumbnail img'); // .thumbnail c'est la classe qui est dans le html
console.log(mesThumbnails);
// On a récupéré une collection contenant tous nos éléments pour leur appliquer un évènement à chacun : une boucle
for (let i = 0 ; i < mesThumbnails.length ; i++){ // .length va aller automatiquement chercher jusqu'à la fin du tableau
    mesThumbnails[i].addEventListener('click', function(){ // on traite les images comme dans un tableau. [i] car c'est i qui est incrémenté // animate__animated animate__shakeX => ce sont les classes de animate.css qu'on va récupérer
        this.classList.add("animate__animated"); // this =>  c'est l'élément en cours
        this.classList.add("animate__shakeX"); // classList.add => ajoute une classe

        this.addEventListener('mouseout', function(){
            this.classList.remove("animate__animated");
            this.classList.remove("animate__shakeX");
        })
    
    let valeurAlt = this.getAttribute('alt'); // on récupère la valeur de l'attribut alt
    let valeurDataFull = this.getAttribute('data-full'); // on récupère la valeur de l'attribut data-full

    // on envoie la valeur de valeurDataFull dans le src de la grande image (id='full)
    document.getElementById('full').setAttribute('src', valeurDataFull);
    // on change le contenu texte de la figcaption id='legende' pour placer le contenu du alt de l'image cliquée
    document.getElementById('legende').textContent = valeurAlt;

})

}