var quote1 = "\"Only I can change my life. No one can do it for me\" <br /> <br /> - Carol Burnett";
var quote2 = "\"Life is 10% what happens to you and 90% how you react to it.\" <br /> <br /> - Charles R. Swindoll";
var quoteGenerator = {
quotes: [quote1,quote2],
newQuotes: [],
indexTracker: 0,
randomQuoteGenerator: function() {
  var randomQuote = this.getRandomArbitrary(0,this.quotes.length);
  this.newQuotes.push(this.quotes[randomQuote]);
  this.getLink(this.newQuotes[this.indexTracker]);
  return this.newQuotes[this.indexTracker];
},

getRandomArbitrary: function(min, max) {
  this.newQuotes.pop();
  return Math.floor(Math.random() * (max - min)) + min;
},
getLink: function(quote) {
  var newArray = quote;
  newArray = newArray.split(" ");
  for (var i = 1; i < newArray.length; i+=2) {
    newArray.splice(i,0,"%20");
  }
  return newArray.join("");

},
newQuote: function () {
  indexTracker = indexTracker++;
 }
};

var handlers = {
  getNewQuote: function() {
    view.displayQuotes();
    var color = this.getRandomColor();
    var twitterQuote = quoteGenerator.getLink(quoteGenerator.randomQuoteGenerator());
    var twitterLink = "https://twitter.com/intent/tweet?text=";
    var twitter = twitterLink.concat(twitterQuote);
    console.log(twitter);
    document.getElementById('dynamicLink').setAttribute('href', twitter);
    document.body.style.backgroundColor = color;
    document.getElementById('wrapper').style.backgroundColor = color;
    document.getElementById('content').style.backgroundColor = color;
    document.getElementById('quoteWrapper').style.color = color;
  },
  getRandomColor: function() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    },
};

var view = {
  displayQuotes: function() {
    var message = document.getElementById('replace');
    message.innerHTML = quoteGenerator.randomQuoteGenerator();

  }
};
console.log(quoteGenerator.randomQuoteGenerator());
console.log(quoteGenerator.randomQuoteGenerator());
console.log(handlers.getRandomColor());
console.log(quoteGenerator.getLink(quoteGenerator.randomQuoteGenerator()));
console.log()
