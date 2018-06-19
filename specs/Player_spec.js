const assert = require('assert');
const Player = require('../Player.js');
const Card = require('../Card.js');

describe('player', function() {
  let player;
  let card;

  beforeEach(function () {
    player = new Player('Richard');
    card =  new Card('Superman', 6, 9, 7);
  });

  it('should have name', function () {
    assert.strictEqual(player.name, 'Richard');
  });

  it('should have no cards', function () {
    assert.deepStrictEqual(player.cards, [] );
  });

  it('add card to player', function () {
    player.addCard(card);
    assert.deepStrictEqual(player.cards, [card] );
  });

});
