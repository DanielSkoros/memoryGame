export default class Deck {
    /** Create instance of unshiffled deck **/
    constructor() {
        this.template = [
            {symbol: 'fa-diamond', faceup: false, matched: false},
            {symbol: 'fa-diamond', faceup: false, matched: false},
            {symbol: 'fa-paper-plane-o', faceup: false, matched: false},
            {symbol: 'fa-paper-plane-o', faceup: false, matched: false},
            {symbol: 'fa-anchor', faceup: false, matched: false},
            {symbol: 'fa-anchor', faceup: false, matched: false},
            {symbol: 'fa-bolt', faceup: false, matched: false},
            {symbol: 'fa-bolt', faceup: false, matched: false},
            {symbol: 'fa-cube', faceup: false, matched: false},
            {symbol: 'fa-cube', faceup: false, matched: false},
            {symbol: 'fa-leaf', faceup: false, matched: false},
            {symbol: 'fa-leaf', faceup: false, matched: false},
            {symbol: 'fa-bicycle', faceup: false, matched: false},
            {symbol: 'fa-bicycle', faceup: false, matched: false},
            {symbol: 'fa-bomb', faceup: false, matched: false},
            {symbol: 'fa-bomb', faceup: false, matched: false},
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