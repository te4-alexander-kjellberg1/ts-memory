import { Card } from "./card";
class Game {
    cards  = ["1_pig.png","2_squirrel.png", "3_rabbit.png", "4_frog.png", "5_fox.png", "6_bear.png", "7_monkey.png", "8_panda.png", "9_chick.png", "10_tiger.png", "11_penguin.png", "12_racoon.png","1_pig.png","2_squirrel.png", "3_rabbit.png", "4_frog.png", "5_fox.png", "6_bear.png", "7_monkey.png", "8_panda.png", "9_chick.png", "10_tiger.png", "11_penguin.png", "12_racoon.png"]
    private _container : Element;
    playgrid = document.querySelector<HTMLDivElement>('.playgrid')!;
    cardTemplate = document.querySelector<HTMLTemplateElement>('#cardTemplate')!;        
    //cardElements : HTMLDivElement[]
    private _cardObjects : Card[]

    constructor(container:Element){
        this._container = container;
        let game = this
        this._container.addEventListener('click', (e) => game.toggleCard(e))
        this._cardObjects = this.cards.map((imageName) => new Card(imageName, this.playgrid, this.cardTemplate))

    };

    run(){

            
    };

    toggleCard(e:Event) {
        console.log('clicked')
        console.log(this._cardObjects)
        let target = e.target as HTMLElement
        let img = target.classList.toggle('flipped');
        console.log(img);
    };




};

export { Game }