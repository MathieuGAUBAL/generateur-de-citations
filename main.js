/**
 * @author mathieu GAUBAL-VATILINGON <mathieu.gaubal-vatilingon@outlook.fr>
 */



/**
 * @function creerCitation - permet de creer une citation et permet de choisir le jeu de données qu'on souhaite utiliser avec checkbox
 * @param  {Boolean} checkbox - reçoit en Booléen - true (on souhaite utiliser un tableau de données secondaire) / false (on utilise le tableau de données principale)
 * @param  {Number} nombreCitation - reçoit un entier - nombre de citation que l'on souhaite
 */
const creerCitation = (checkbox, nombreCitation) => {
    let tableauCitations = [];
    for (let nFois = 0; nFois < nombreCitation; nFois++) {
       
        tableauCitations.push(new Citation(checkbox ? tableauChoix2 : tableauChoix1, nombreCitation));
        tableauCitations[nFois].genererCitation();
        tableauCitations[nFois].insertionDansDom();
    }
}

/**
 * @function executerProgramme - programme principal
 */
const executerProgramme = () => {

    let nombreCitation = document.getElementById('nombreCitation').value;
    let checkbox = document.getElementById('politiquementIncorrect').checked;

    if (nombreCitation > 0 && nombreCitation <= 5) {
        Citation.suppressionCitations(nombreCitation, 'p-citation');

        creerCitation(checkbox, nombreCitation);
    } else {
        alert("Merci de sélectionner un chiffre entre 1 et 5");
    }
}

executerProgramme();
