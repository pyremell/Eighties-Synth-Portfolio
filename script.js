// Random Quote Generator (API edition)

// function getQuote() {
//   fetch('http://movie-quotes-app.herokuapp.com/api/v1/quotes?category=sci-fi', {
//     Headers: {
//       'Authorization': 'Token token=3hn69pl6vfm6MoT8fG5vlgtt'
//     }
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       displayQuote(data.message);
//       console.log(data)
//     })
//     .catch(function () {
//       console.log("An error occurred");
//     });
// }

// function displayQuote(quote) {
//   const quoteText = document.querySelector('.quote-text');
//   quoteText.textContent = quote;

//   const tweetButton = document.querySelector('.tweet');
//   tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
// }

// const newQuoteButton = document.querySelector('.new-quote');
// newQuoteButton.addEventListener('click', getQuote);

// getQuote();





// Random Quote Generator (Non-API Edition)
const quotes = ['"Quite an experience to live in fear, isn\’t it? That\’s what it is to be a slave." --- Blade Runner', '"The needs of the many outweigh ... the needs of the few... Or the one." --- Star Trek II: The Wrath of Khan', '"I\'ll be back" --- The Terminator', '"Do you know who I was? Nobody. Except on the day after, I was still alive. This nobody had a chance to be somebody." --- Mad Max: Beyond Thunderdome', '"Do... or do not. There is no try." --- The Empire Strikes Back', '"I\'m sorry, Dave. I\'m afraid I can\'t do that." --- 2001: A Space Odyssey', '"Look, man. I only need to know one thing; where they are." --- Aliens', '"The way I see it, if you\’re going to build a time machine into a car, why not do it with some style?" --- Back to the Future', '"Get to the Chopper!" --- Predator', '"Somebody in this camp ain\’t what he appears to be. Right now that may be one or two of us. By spring, it could be all of us." --- The Thing']

function newQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote-text').innerHTML = quotes[randomNumber];
}

// function tweetQuote(quote) {
//   let currentQuote = document.querySelector('.quote-text');
//   currentQuote.textContent = quote;

//   let tweetButton = document.querySelector('.tweet');
//   tweetButton.setAttribute('href', `https://twitter.com/share?text=${currentQuote}`);
//   }

// tweetQuote().addEventListener('click', tweetButton);
  
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