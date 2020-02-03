import { isMainThread } from "worker_threads";

export function testClick() {
  return console.log("clicked!");
}

function generateNewDeck() {
  var divs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var deck = [];
  var i = divs.length;
  var j = 0;

  while (i--) {
    j = Math.floor(Math.random() * i);
    deck.push(divs[j]);
    console.log("Random = " + j);
    console.log("Deck = " + deck);
    divs.splice(j, 1);
    console.log(divs);
    // i--;
  }
  console.log(deck);
}