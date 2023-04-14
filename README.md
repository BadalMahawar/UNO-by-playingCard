# UNO Card Game

This is a UNO card game that supports up to 4 players and different types of cards, including number cards and action cards.

## Installation

To install the game, simply clone the repository and run the `index.js` file:

```git clone https://github.com/BadalMahawar/UNO-by-playingCard.git
cd UNO-by-playingCard
node index.js
```

Note that you must have Node.js installed on your system to run the game.

## Gameplay

Each player starts with a hand of 5 cards. The game starts with a deck of 52 cards (a standard deck of playing cards).

Players take turns playing cards from their hand, following a set of rules that define what cards can be played when. A player can only play a card if it matches either the suit or the rank of the top card on the discard pile.

If a player cannot play a card, they must draw a card from the draw pile. If the draw pile is empty, the game ends in a draw and no player is declared a winner.

The game ends when one player runs out of cards, who is declared the winner.

## Action Cards

Aces, Kings, Queens, and Jacks are action cards. When one of these is played, the following actions occur:

- Ace (A): Skip the next player in turn
- King (K): Reverse the sequence of who plays next
- Queen (Q): +2 (the next player must draw two cards)
- Jack (J): +4 (the next player must draw four cards)

Note that actions are not stackable, i.e., if a Queen is played, the next player must draw two cards and cannot play a Queen from their hand on that turn even if available.

## Testing

Unit tests for the game can be run using the following command:
```
npm test
```

The tests use the Jest framework and cover all major game functions.


