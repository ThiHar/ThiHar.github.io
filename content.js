$(document).ready(function() {
  loadNewQuote();
  
  $('button').click(function(){
    loadNewQuote();
  });
});

var loadNewQuote = function() {
  var newQuote = quoteMachine.getQuote(quotes);
  $('blockquote').text(newQuote[1]);  // Quote
  $('.quote p').text("-" + newQuote[0]);  // Author
  $('footer #current').text(newQuote[2]); // Index
  $('footer #total').text(newQuote[3]) // Total
};

var quotes = [
  {"Unknown": "It isn't courage if you're not afraid."},
  {"William Shakespeare": "There's divinity that shapes our ends, rough-hew them how we will."},
  {"Shonna Dorsey": "Be good and kind to each other; you never know what others are going through."},
  {"Shonna Dorsey": "The better you take care of yourself, the more you can do for others."},
];

var quoteMachine = {
  getRandom: function(numVals) {
    return Math.floor(Math.random() * numVals);
  },
  
  getAuthor: function(quote) {
    return Object.keys(quote);
  },
  
  getQuote: function(quotes) {
    var selectedIndex = this.getRandom(quotes.length);
    var quote = quotes[selectedIndex];
    var author = this.getAuthor(quote);
    return [author, quote[author], selectedIndex + 1, quotes.length];
  }
};
