export default class GameUI {
    buildDeck(gameDeck){
       const deck = document.querySelector('.deck');

       if(deck.childElementCount > 0){
           while(deck.firstChild){
               deck.removeChild(deck.firstChild)
           }
       }

       const deckFragment = document.createDocumentFragment();
       gameDeck.forEach((card, cardIndex) => {
           const liElement = document.createElement('li');
            liElement.setAttribute('id', cardIndex);
            liElement.setAttribute('class', 'card');

            const icon = document.createElement('span');
            icon.setAttribute('class', `fa ${card.symbol}`);
            liElement.appendChild(icon);

            deckFragment.appendChild(liElement);
       });
       deck.appendChild(deckFragment);
    }

    turnFaceUp(selectedCardIndex) {
        const card = document.getElementById(selectedCardIndex);
        const cardClasses = card.getAttribute('class') + ' open faceup';
        card.setAttribute('class', cardClasses);
    }

    turnFaceDown(selectedCardIndex){
        const card = document.getElementById(selectedCardIndex);
        card.setAttribute('class', 'card');
    }

    isFaceUp(selectedCardIndex){
        const card = document.getElementById(selectedCardIndex);
        return card.getAttribute('class').match('open');
    }
}