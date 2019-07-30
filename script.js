
// Random Quote Generator
const quotes = ['"Quite an experience to live in fear, isn\’t it? That\’s what it is to be a slave." --- Blade Runner', '"The needs of the many outweigh ... the needs of the few... Or the one." --- Star Trek II: The Wrath of Khan', '"I\'ll be back" --- The Terminator', '"Do you know who I was? Nobody. Except on the day after, I was still alive. This nobody had a chance to be somebody." --- Mad Max: Beyond Thunderdome', '"Do... or do not. There is no try." --- The Empire Strikes Back', '"I\'m sorry, Dave. I\'m afraid I can\'t do that." --- 2001: A Space Odyssey', '"Look, man. I only need to know one thing: where they are." --- Aliens', '"The way I see it, if you\’re going to build a time machine into a car, why not do it with some style?" --- Back to the Future', '"Get to the Chopper!" --- Predator', '"Somebody in this camp ain\’t what he appears to be. Right now that may be one or two of us. By spring, it could be all of us." --- The Thing']

function newQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote-text').innerHTML = quotes[randomNumber];
}

function tweetQuote() {
  let currentQuote = document.getElementById('quote-text').textContent;

  let tweetButton = document.querySelector('.tweet');
  tweetButton.setAttribute('href', `https://twitter.com/intent/tweet?text=${currentQuote}`);
  }

  newQuote();
  
// Collapsible Content
let coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

tweetQuote();
