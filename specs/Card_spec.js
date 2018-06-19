const assert = require('assert');
const Card = require('../Card.js');

describe('Card', function(){
  let card;

  beforeEach(function(){
    card = new Card('Superman', 6, 9, 7);
  });

  it("should have a name", function(){
    assert.strictEqual(card.name, "Superman");
  });

  it("should have intelligence", function(){
    assert.strictEqual(card.intelligence, 6)
  });

  it("should have strength", function(){
    assert.strictEqual(card.strength, 9)
  });

  it("should have agility", function(){
    assert.strictEqual(card.agility, 7)
  });


});
