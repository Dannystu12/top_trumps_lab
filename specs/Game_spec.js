const assert = require('assert');
const Game = require('../Game.js');
const Player = require('../Player.js');
const Card = require('../Card.js');

describe('Game', function(){
  let game;

  beforeEach(function(){
    const player1 = new Player('Richard');
    const player2 = new Player('Daniel');
    game = new Game(player1, player2);
  });

  it('has player1', function() {
    assert.strictEqual(game.player1.name, 'Richard');

  });

  it('has player2', function() {
    assert.strictEqual(game.player2.name, 'Daniel');

  });



});
