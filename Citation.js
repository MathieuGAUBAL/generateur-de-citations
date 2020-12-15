

class Citation {
    /**
     * @param  {Array} tableauChoix reçoit un tableau
     * @param  {Number} nombreCitations reçoit un entier
     */
    constructor(tableauChoix, nombreCitations) {
        this.nombreChoix = tableauChoix.length;
        this.tableauChoix = tableauChoix;
        this.nombreCitations = nombreCitations;
        this.tableauCitations = [];
    }

    genererCitation = () => {

        for (let i = 0; i < this.nombreChoix; i++) {
            let index = this.nombreAleatoire(this.tableauChoix[i].length);
            this.tableauCitations.push(this.tableauChoix[i][index]);
        }
      
    }


    nombreAleatoire = (max) => {
        return Math.floor(Math.random() * max);
    }

    /**
     * @function affichage - permet de creer la citation puis de l'afficher dans le DOM
     *  
     */
    affichage = () => {

        let div_id_citation = document.getElementById('citations');
        let phrase;

        let paragraphe = document.createElement('p');
        let blockquote = document.createElement('blockquote');

        blockquote.classList.add('p-citation');

        //let phrase est la variable qui regroupement les 4 phrases de la citation qui proviennent du tableau this.tableauCitations
        phrase = document.createTextNode(this.tableauCitations.join(" "));
        paragraphe.append(phrase);

        blockquote.append(paragraphe);

        div_id_citation.appendChild(blockquote);
    }

    static tableauIndex = [];
    /**
     * @param  {Number} nombreCitation reçoit un Entier
     * @param  {String} id reçoit une chaine de caracteres
     */
    static suppressionCitations = (nombreCitation, id) => {

        Citation.tableauIndex.unshift(nombreCitation);

        if (Citation.tableauIndex.length > 2) {
            Citation.tableauIndex.pop();
        }

        if (Citation.tableauIndex.length === 2) {
            let element = document.getElementsByClassName(id);

            for (let i = 0; i < Citation.tableauIndex[1]; i++) {
                element[0].parentNode.removeChild(element[0]);
            }
        }
    }

}