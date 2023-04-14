const Deck = require('./deck');
const Player = require('./player');

const playerNames = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
const players = playerNames.map((name) => new Player(name));
const deck = new Deck();

function drawCard(player) {
  if (drawPile.length === 0) {
    endGameInDraw();
    return;
  }

  const card = drawPile.pop();
  player.hand.push(card);

  if (player.isHuman) {
    console.log(`You drew a ${card.rank} of ${card.suit}`);
  } else {
    console.log(`The computer drew a card`);
  }
}

function playCard(player, card) {
  // Check if the card can be legally played
  if (!canPlayCard(player, card)) {
    console.log(`You cannot play the ${card.rank} of ${card.suit}`);
    return;
  }

  // Remove the card from the player's hand and add it to the discard pile
  const cardIndex = player.hand.findIndex((c) => c === card);
  const playedCard = player.hand.splice(cardIndex, 1)[0];
  discardPile.push(playedCard);

  // Check if the played card is an action card and perform the appropriate action
  switch (playedCard.rank) {
    case 'A':
      skipNextPlayer();
      break;
    case 'K':
      reversePlayOrder();
      break;
    case 'Q':
      nextPlayerDrawCards(2);
      break;
    case 'J':
      nextPlayerDrawCards(4);
      break;
    default:
      break;
  }

  // Check if the player has won the game
  if (player.hand.length === 0) {
    endGame(player);
    return;
  }
  // Advance to the next player
  advanceToNextPlayer();
}

function canPlayCard(player, card) {
  const topCard = discardPile[discardPile.length - 1];
  return card.rank === topCard.rank || card.suit === topCard.suit;
}

function skipNextPlayer() {
  turn = (turn + 2) % players.length;
}

function reverseTurnOrder() {
  players.reverse();
  turn = players.length - turn - 1;
}

function addCardsToNextPlayer(numCards) {
  turn = (turn + 1) % players.length;
  const nextPlayer = players[turn];
  for (let i = 0; i < numCards; i++) {
    nextPlayer.hand.push(drawCard());
  }
  if (!canPlayCard(nextPlayer)) {
    skipNextPlayer();
  }
}
