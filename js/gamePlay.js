const WINNING_POINTS = 8;

export default class GamePlay {
  constructor() {
      this.deck = null;
      this.shuffledDeck = [];
      this.gameUI = null;
      this.firstCard = undefined;
      this.points = 0;
      this.moves = 0;
      this.cardsFlipped = 0;
  }

  setDeck(deck){
      this.deck = deck;
  }

  setGameUI(gameUI){
      this.gameUI = gameUI;
  }

  newGame(){
      this.firstCard = undefined;
      this.points = 0;
      this.shuffledDeck = this.deck.shuffle();
      this.gameUI.buildDeck(this.shuffledDeck);
      this.moves = 0;
      this.cardsFlipped = 0;
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



      if (this.cardsFlipped > 1){
          return false;
      }

      this.cardsFlipped++;
      if (this.firstCard === undefined && this.cardsFlipped === 1){
          this.firstCard = selectedCardIndex;
          this.gameUI.turnFaceUp(selectedCardIndex);
          return;
      }

      this.gameUI.turnFaceUp(selectedCardIndex);


      if (this.deck.symbolsMatch(this.shuffledDeck, this.firstCard, selectedCardIndex)){
          this.firstCard = undefined;
          this.points++;
          this.moves++;
          this.gameUI.updateMoves(this.moves);
            if (this.points === WINNING_POINTS){
                this.gameFinished();
            }
          this.cardsFlipped = 0;
      }else {
          setTimeout(() => {
              this.gameUI.turnFaceDown(selectedCardIndex);
              this.gameUI.turnFaceDown(this.firstCard);
              this.firstCard = undefined;
              this.moves++;
              this.gameUI.updateMoves(this.moves);
              this.cardsFlipped = 0;
          }, 1000);
      }
  }



  gameFinished(){
      console.log('won')
  }
}