import { isMainThread } from "worker_threads";

export function testClick() {
  return console.log("clicked!");
}

export function Deck() {
  this.deck = [];
}

Deck.prototype.generateNewDeck = function() {
  var divs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var i = divs.length;
  var j = 0;

  while (i--) {
    j = Math.floor(Math.random() * i);
    this.deck.push(divs[j]);
    divs.splice(j, 1);
  }
  return this.deck;
}

Deck.prototype.assignCards = function() {
  for (var i = 0; i < this.deck.length; i++) {
    if (this.deck[i] === 1 || this.deck[i] === 6) {
      this.deck.splice(i, 1, "two");
    } else if (this.deck[i] === 2 || this.deck[i] === 7) {
      this.deck.splice(i, 1, "Jack");
    } else if (this.deck[i] === 3 || this.deck[i] === 8) {
      this.deck.splice(i, 1, "Queen");
    } else if (this.deck[i] === 4 || this.deck[i] === 9) {
      this.deck.splice(i, 1, "King");
    } else if (this.deck[i] === 5 || this.deck[i] === 10) {
      this.deck.splice(i, 1, "Ace");
    }
  }
  return this.deck;
}


