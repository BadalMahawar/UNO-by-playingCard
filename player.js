class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  draw(card) {
    this.hand.push(card);
  }

  play(cardIndex, discardPile) {
    const card = this.hand[cardIndex];
    const topCard = discardPile[discardPile.length - 1];
    if (card.suit === topCard.suit || card.rank === topCard.rank) {
      this.hand.splice(cardIndex, 1);
      discardPile.push(card);
      return true;
    } else {
      return false;
    }
  }
}
