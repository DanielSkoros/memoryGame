export default class GamePlay {
  constructor() {
      this.deck = null;
      this.shuffledDeck = [];
      this.gameUI = null;
      this.firstCard = undefined;
      this.points = 0;
  }

  setDeck(deck){
      this.deck = deck;
  }

  setGameUI(gameUI){
      this.gameUI = gameUI;
  }

  getDeck(){
      return this.shuffledDeck;
  }

  newGame(){
      this.firstCard = undefined;
      this.points = 0;
      this.shuffledDeck = this.deck.shuffle();
      this.gameUI.buildDeck(this.shuffledDeck);
  }

  turn(selectedCardIndex){
      if(!selectedCardIndex){
          return false;
      }

      if(this.gameUI.isFaceUp(selectedCardIndex)){
          return false;
      }

      if (selectedCardIndex === this.firstCard){
          return false;
      }

      if (this.firstCard === undefined){
          this.firstCard = selectedCardIndex;
          this.gameUI.turnFaceUp(selectedCardIndex);
          return;
      }
      this.gameUI.turnFaceUp(selectedCardIndex);


      if (this.deck.symbolsMatch(this.shuffledDeck, this.firstCard, selectedCardIndex)){
          this.firstCard = undefined;
          this.points++;
      }else {
          setTimeout(() => {
              this.gameUI.turnFaceDown(selectedCardIndex);
              this.gameUI.turnFaceDown(this.firstCard);
              this.firstCard = undefined;
          }, 1000);
      }
  }
}