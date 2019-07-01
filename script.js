// Random Quote Generator
const endpoint = "http://movie-quotes-app.herokuapp.com/api/v1/quotes?category=sci-fi/token=3hn69pl6vfm6MoT8fG5vlgtt";

function getQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayQuote(data.message);
    })
    .catch(function () {
      console.log("An error occurred");
    });
}

function displayQuote(quote) {
  const quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;

  const tweetButton = document.querySelector('.tweet');
  tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();

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