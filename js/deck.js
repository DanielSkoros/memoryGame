export default class Deck {
    /** Create instance of unshiffled deck **/
    constructor() {
        this.template = [
            {symbol: 'fa-amazon', faceup: false, matched: false},
            {symbol: 'fa-amazon', faceup: false, matched: false},
            {symbol: 'fa-app-store', faceup: false, matched: false},
            {symbol: 'fa-app-store', faceup: false, matched: false},
            {symbol: 'fa-apple', faceup: false, matched: false},
            {symbol: 'fa-apple', faceup: false, matched: false},
            {symbol: 'fa-bluetooth-b', faceup: false, matched: false},
            {symbol: 'fa-bluetooth-b', faceup: false, matched: false},
            {symbol: 'fa-chrome', faceup: false, matched: false},
            {symbol: 'fa-chrome', faceup: false, matched: false},
            {symbol: 'fa-centos', faceup: false, matched: false},
            {symbol: 'fa-centos', faceup: false, matched: false},
            {symbol: 'fa-canadian-maple-leaf', faceup: false, matched: false},
            {symbol: 'fa-canadian-maple-leaf', faceup: false, matched: false},
            {symbol: 'fa-btc', faceup: false, matched: false},
            {symbol: 'fa-btc', faceup: false, matched: false},
        ];
    }

    /** Check if two cards have matching symbols **/
    symbolsMatch(cardDeck, firstIndex, secondIndex) {
        return cardDeck[firstIndex].symbol === cardDeck[secondIndex].symbol;
    }

    //**Durstenfeld shuffle, randomly change elements with each other

    shuffle(){
        let currentDeck = this.template;
        for (let i = currentDeck.length - 1; i>0; i--){
            const random = Math.floor(Math.random() * (i + 1));
            /**Shorthand of deck[i] = deck[random]; deck[random] = deck[i] **/

            [currentDeck[i], currentDeck[random]] = [currentDeck[random], currentDeck[i]];
        }
        return currentDeck;
    }
}