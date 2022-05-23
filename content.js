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
  {"M": "I'll rather manage on my own"},
{"M": "You're never alone, Atleast not in your imagination."},
 {"M": "haha.. more sleep is the KEY"},
  {"M": "I know it's a tough one to tackle"},
 {"M": "But you can still do it!!"},
  {"M": "You do like to live dangerously"},
 {"M": "And I say I don't like drama?!"},
  {"M": "Don't you see how people grumble that roses have thorns instead of being grateful that thorns have roses?"},
 {"M": "Be comfortable in your own skin, it's very genuine and far more attractive than being an all-perfect being."},
  {"M": "I guess all of us feel a bit 'meeh' sometimes but well we have to be those so called social beings ARGH"},
 {"M": "Oh but it's surprisingly good"},
 {"M": "You're pretty interesting"},
  {"M": "Not now. I'm glad I grew up"},
 {"M": "Ah my preference for drama!!"},
  {"M": "woah! well you ARE MADE FOR THIS!"},
 {"M": "I was not born to be subtle"},
  {"M": "I suppose everyone's a bit narcissistic and a healthy dose of narcissism is actually healthy, "},
 {"M": "I crave to someone else, rather than my true self,, not out of disappointment but for reasons unknown...in the process, I somehow ended up confused..."},
  {"M": "the more you know, the more you think you're ignorant There are a looooooooooooot of things that im blissfully aware of! what.. i mean unaware of**
"},
 {"M": "Be good and kind to each other; you never know what others are going through."},
 {"M": "although there's a thin line between loving thyself and narcissism"},
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
