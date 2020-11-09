/* function generateurDeCitations() {
    let citation = "";

    let phrase1 = document.getElementById('choix1').value;
    let phrase2 = document.getElementById('choix2').value;
    let phrase3 = document.getElementById('choix3').value;
    let phrase4 = document.getElementById('choix4').value;

    citation = `${phrase1} ${phrase2} ${phrase3} ${phrase4}`;
    let div_id_citation = document.getElementById('citation');
    div_id_citation.innerHTML = `
    <blockquote>
        <p>${citation}</p>
        <footer>—Anonyme, <cite>La langue de bois</cite></footer>
    </blockquote>`;

} */


const tableauChoix1 = [

    [
        "Mesdames, messieurs,", "Je reste fondamentalement persuadé que", "Dès lors, sachez que je me battrai pour faire admettre que",
        "Par ailleurs, c'est en toute connaissance de cause que je peux affirmer aujourd'hui que", "Je tiens à vous ici ma détermination sans faille pour clamer haut et fort que",
        "J'ai depuis longtemps défendu l'idée que", "Et c'est en toute conscience que je déclare avec conviction que",
        "Et ce n'est certainement pas vous, mes chers compatriotes, qui me contredirez si je dis que"
    ],

    [
        "la conjoncture actuelle", "la situation d'exclusion que certains d'entre vous connaissent",
        "l'acuité des problème de la vie quotidienne", "la volonté farouche de sortir notre pays de la crise",
        "l'effort prioritaire en faveur du statut précaire des exclus", "le particularisme dû à notre histoire unique",
        "l'aspiration plus que légitime de chacun au progrès social", "la nécessité de répondre à votre inquiétude journalière, que vous soyez jeune ou âgés"
    ],

    [
        "doit s'intégrer à la finalisation globale", "oblige à la prise en compte encore plus effective",
        "interpelle le citoyen que je suis et nous oblige tous à aller de l'avant dans la voie", "a pour conséquence obligatoire l'urgente nécessité",
        "conforte mon désir incontestable d'aller dans le sens", "doit nous amener au choix réellement impératif",
        "doit prendre en compte les préoccupations de la population de base dans l'élaboration", "entraîne une mission somme toute des plus exaltantes pour moi : l'élaboration"
    ],

    [
        "d'un procéssus allant vers plus d'égalité.", "d'un avenir s'orientant vers plus de progrès et plus de justice.",
        "d'une restructuration dans laquelle chacun pourra enfin retrouver sa dignité.", "d'une valorisation sans concession de nos caractères spécifiques.",
        "d'un plan correspondant véritablement aux grands axes sociaux prioritaires.", "de solutions rapides correspondant aux grands axes sociaux prioritaires.",
        "d'un programme plus humain, plus fraternel et plus juste.", "d'un projet porteur de véritables espoires, notamment pour les plus démunies."
    ]
]

const tableauChoix2 = [

    [
        "Les sans dents,", "Je suis carrément certain que", "Faut savoir, que je me battrai pas pour que",
        "Maintenant, avec mon peu d'expérience, je peux vous dire que", "Je tiens à vous proclamer haut et fort que",
        "J'ai depuis peu défendu que", "Et c'est pas maintenant que ça va s'arrêter que",
        "Et ce n'est certainement pas vous, qui me contredirez si je dis que"
    ],

    [
        "la CAF actuelle", "la situation de merde que certains d'entre vous connaissent",
        "le problème de la vie quotidienne", "la volonté de faire sortir notre pays",
        "l'effort des nos amis chômeurs et des exclus", "la bêtise unique",
        "l'aspiration de chacun au progrès associal", "la nécessité que vous soyez teenager ou vieux"
    ],

    [
        "doit s'intégrer à la buvette globale", "oblige à chacun de se bouger",
        "interpelle le délinquant dans la bonne voie", "a pour conséquence obligatoire l'urgente nécessité",
        "conforte mon désir sexuel dans ce sens", "doit nous amener au choix réel",
        "doit prendre en compte les préoccupations des gens de base", "entraîne une mission risquée : l'abrutissement"
    ],

    [
        "d'un chemin menant vers la médiocrité.", "d'un avenir s'orientant vers moins de justice.",
        "d'une restructuration faciale afin de perdre sa dignité.", "d'une valorisation de nos caractères chelous.",
        "d'un plan B est la priorité.", "de solutions lentes pour les cas sociaux.",
        "d'un programme inhumain, moins fraternel et injuste.", "d'un projet merdique, notamment pour la classe moyenne."
    ]
]

const array = [];

const affichage = {
    ajouterOption: function (id, phrase, compteur) {

        let element = document.getElementById(id);
        let option = document.createElement('option');
        option.setAttribute('value', phrase);
        option.text = phrase;
        if (compteur === 0) {
            option.setAttribute('selected', true);
        }
        element.appendChild(option);
    },

    suppressionCitations: function (nombreCitation, id) {

        array.unshift(nombreCitation);
        if (array.length > 2) {
            array.pop();
        }

        if (array.length === 2) {
            let element = document.getElementsByClassName(id);

            for (let i = 0; i < array[1]; i++) {
                element[0].parentNode.removeChild(element[0]);
            }
        }
    }
}


function nombreCitation() {
    let tableauCitations = [];
    let nombreCitation = document.getElementById('nombreCitation').value;
    let checkbox = document.getElementById('politiquementIncorrect').checked;

    affichage.suppressionCitations(nombreCitation, 'p-citation');

    for (let i = 0; i < nombreCitation; i++) {
        tableauCitations.push(new Citation(checkbox ? tableauChoix2 : tableauChoix1, checkbox ? tableauChoix2.length : tableauChoix1.length , nombreCitation));
        tableauCitations[i].generateurCitation();
        tableauCitations[i].affichage();
    }
}

nombreCitation();
