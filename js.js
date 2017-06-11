var quotes = ["Only I can change my life. No one can do it for me. - Carol Burnett","Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll", "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high,but by doing what you can to make grace happen... yourself, right now, right down here on Earth. - Bradley Whitford"];

var newQuotes = [];
var indexTracker = 0;



function randomQuoteGenerator() {
    var randomQuote = getRandomArbitrary(0,quotes.length);
    newQuotes.push(quotes[randomQuote]);
    return newQuotes[indexTracker];

}

function getRandomArbitrary(min, max) {
  newQuotes.pop();
  return Math.floor(Math.random() * (max - min)) + min;
}

function newQuote() {
  indexTracker = indexTracker++;

}

console.log(randomQuoteGenerator());
console.log(randomQuoteGenerator());
