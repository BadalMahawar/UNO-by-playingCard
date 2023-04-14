const assert = require('assert');
const Deck = require('./deck');
const Player = require('./player');

describe('Multiplayer card game', () => {
  describe('Deck', () => {
    it('should create a deck of 52 cards', () => {
      const deck = new Deck();
      assert.equal(deck.cards.length, 52);
    });

    it('should shuffle the deck', () => {
      const deck = new Deck();
      const firstCard = deck.cards[0];
      deck.shuffle();
      assert.notDeepStrictEqual(deck.cards[0], firstCard);
    });

    it('should draw a card from the deck', () => {
      const deck = new Deck();
      const card = deck.draw();
      assert.ok(card);
    });
  });

  describe('Player', () => {
    it('should create a player with a name', () => {
      const player = new Player('Test');
      assert.equal(player.name, 'Test');
    });

    it('should draw a card into the player hand', () => {
      const player = new Player('Test');
      const card = { suit: 'hearts', rank: '2' };
      player.draw(card);
      assert.deepEqual(player.hand[0], card);
    });

    it('should play a card from the player hand', () => {
      const player = new Player('Test');
      const card1 = { suit: 'hearts', rank: '2' };
      const card2 = { suit: 'spades', rank: '3' };
      player.draw(card1);
      player.draw(card2);
      const discardPile = [card1];
      const result = player.play(1, discardPile);
      assert.ok(result);
      assert.deepEqual(discardPile[1], card2);
      assert.equal(player.hand.length, 1);
    });

    it('should not play an invalid card from the player hand', () => {
      const player = new Player('Test');
      const card1 = { suit: 'hearts', rank: '2' };
      const card2 = { suit: 'spades', rank: '3' };
      player.draw(card1);
      const discardPile = [card2];
      const result = player.play(0, discardPile);
      assert.ok(!result);
      assert.deepEqual(discardPile[0], card2);
      assert.equal(player.hand.length, 1);
    });
  });
});
