let resultat = document.getElementById('resultat');


function multiplie() {
    let userChoice = document.getElementById('userChoice').value;

    if (userChoice >= 2 && userChoice <= 9) {
        for (multiplie = 0; multiplie <= 10; multiplie++){
            resultat.innerHTML += '<li>' + `${multiplie} x ${userChoice} = ` + multiplie*userChoice + '</li>';
        }
    } else {
        alert("J'ai dit entre 2 et 9 seulement!");
        }
}

function effacer() {
window.location.reload();
}