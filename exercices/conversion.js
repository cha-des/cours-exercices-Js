//let degreCelsius = prompt ("Entrez la valeur d'une température en Celsius");
//let degreFahrenheit = ((degreCelsius * 9/5) +32);

//alert ('la température que vous avez saisie est égale à' + ' ' + degreFahrenheit + ' ' + 'fahrenheit');




let resultat = document.getElementById("resultat");

function temperature(){
    let degreCelsius = document.getElementById('degreCelsius').value;
    let degreFahrenheit = ((degreCelsius * 9/5) + 32) ;

    resultat.innerHTML = 'La température en Fahrenheit est de : ' + ' ' + degreFahrenheit + ' ' + '°F';
}

    

   

