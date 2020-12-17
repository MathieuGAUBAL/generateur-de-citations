

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

        for (let indexTab = 0; indexTab < this.nombreChoix; indexTab++) {
            let nbrAleatoire = Citation.genererNombreAleatoire(this.tableauChoix[indexTab].length);
            this.tableauCitations.push(this.tableauChoix[indexTab][nbrAleatoire]);
        }
    }


    static genererNombreAleatoire = (nombre) => {
        return Math.floor(Math.random() * nombre);
    }

    /**
     * @function insertionDansDom - permet de creer les élements "p", "blockquote", "div" afin de construire l'enveloppe de la citation puis d'insérer cette dernière dans le DOM
     *  
     */
    insertionDansDom = () => {

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

    static tableauHistoriqueNbrCitation = [];
    /**
     * @param  {Number} nombreCitation reçoit un Entier
     * @param  {String} id reçoit une chaine de caracteres
     */
    static suppressionCitations = (nombreCitation, id) => {

        Citation.tableauHistoriqueNbrCitation.unshift(nombreCitation);

        if (Citation.tableauHistoriqueNbrCitation.length > 2) {
            Citation.tableauHistoriqueNbrCitation.pop();
        }

        if (Citation.tableauHistoriqueNbrCitation.length === 2) {
            let element = document.getElementsByClassName(id);

            for (let nbFois = 0; nbFois < Citation.tableauHistoriqueNbrCitation[1]; nbFois++) {
                element[0].parentNode.removeChild(element[0]);
            }
        }
        
    }

}

