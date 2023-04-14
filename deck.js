const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'jack',
  'queen',
  'king',
  'ace',
];

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        this.cards.push(new Card(suit, rank));
      });
    });
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.pop();
  }
}
