import {v4 as uuid} from "uuid"
class Card {

    private _uuid: string

    constructor(imgName:string, playgrid : HTMLDivElement, template : HTMLTemplateElement){
        let card = template.content.cloneNode(true) as HTMLElement;    
        let cardDiv = card.querySelector('.card') as Element;
        this._uuid = uuid()
        playgrid.appendChild(cardDiv) as Element;
    };    

    public get imgName() : string {
        console.log(this.imgName)
        return this.imgName;
    }

    

    public flip() {

    }
    
};

export { Card }