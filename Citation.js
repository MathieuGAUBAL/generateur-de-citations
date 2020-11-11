
/**
 * @param  {Array} tableauChoix
 * @param  {Number} nombreChoix
 * @param  {Number} nombreCitations
 */
class Citation {
    constructor(tableauChoix, nombreChoix, nombreCitations) {
        this.nombreChoix = nombreChoix;
        this.tableauChoix = tableauChoix;
        this.nombreCitations = nombreCitations;
        this.tableauCitations = [];
    }

    generateurCitation = () => {
       
        for (let i = 0; i < this.nombreChoix; i++) {
            let index = this.getRandom(this.tableauChoix[i].length);
            this.tableauCitations.push(this.tableauChoix[i][index]);
        }
    }


    getRandom = (max) => {
        return Math.floor(Math.random() * max);
    }


    affichage = () => {

        let div_id_citation = document.getElementById('citations');
        let phrase;

        let paragraphe = document.createElement('p');
        let blockquote = document.createElement('blockquote');

        blockquote.classList.add('p-citation');

        phrase = document.createTextNode(this.tableauCitations.join(" "));
        paragraphe.append(phrase);

        blockquote.append(paragraphe);

        div_id_citation.appendChild(blockquote);
    }
}