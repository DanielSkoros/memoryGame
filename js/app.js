import Deck from './deck.js';
import GamePlay from './gamePlay.js';
import GameUI from './gameUI.js';

const deck = new Deck();
const gamePlay = new GamePlay();
const gameUI = new GameUI();

gamePlay.setDeck(deck);
gamePlay.setGameUI(gameUI);
gamePlay.newGame();

const gameBoard = document.querySelector('.deck');

gameBoard.addEventListener('click', (e) => {
    gamePlay.turn(e.target.getAttribute('id'));
});