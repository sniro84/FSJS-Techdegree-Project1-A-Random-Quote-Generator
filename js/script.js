/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Name: Snir Holland
Date: 04/07/2019
******************************************/

// a container to store the collection of quotes
let quotes = [ ];

// a container to store different colors
let colors = [ ];

// a timer that generates a new quote every few seconds
let interval = setInterval(printQuote,20000);

// famous quotes
let quote1 = 
{
   quote:     "Strive not to be a success, but rather to be of value." ,
   source:    "Albert Einstein",
   tags:      ["Inspirational", "Attitude", "Success"]
};

let quote2 = 
{
  quote:   "The journey of a thousand miles begins with one step." ,
  source:  "Lao Tzu" ,
  tags:      ["Motivational", "Hope", "Future"]
};

let quote3 = 
{
  quote:      "This is the beginning of a beautiful friendship." ,
  source:     "Casablanca" ,
  citation:   "Movie" ,
  year:       1947 ,
  tags:      ["Romantic", "Friendship", "Love", "Movies"]
};

let quote4 = 
{
  quote:      "Always remember that you are absolutely unique. Just like everyone else" ,
  source:     "Margaret Mead"  ,
  tags:       ["Humor", "Society", "Positive"]
};

let quote5 = 
{
  quote:      "You only live once, but if you do it right, once is enough." ,
  source:     "Mae West" ,
  tags:       ["Life" , "Attitude"]
};

let quote6 = 
{
  quote:      "Love the life you live. Live the life you love" ,
  source:     "Bob Marley" ,
  citation:   "Song" ,
  tags:       ["Life", "Positive", "Attitude"]       
};

let quote7 = 
{
  quote:      "Live life to the fullest, and focus on the positive." ,
  source:     "Matt Cameron" ,
  tags:       ["Life", "Future", "Positive", "Attitude"]
};

let quote8 = 
{
  quote:      "There's no place like home." ,
  source:     "The Wizard of Oz" ,
  citation:   "book" ,
  year:        1900 ,
  tags:       ["Home", "Happiness"]
};

let quote9 = 
{
  quote:      "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind." ,
  source:     "Dr. Seuss" ,
  tags:       ["Attitude", "Society", "Courage"] 
};

// pushing the quotes into the quotes container.
quotes.push(quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9);

// pushing colors into the colors container
colors.push("#ff00bf","#0099cc","#b300b3","#ff3300","#00004d","#33cc33","#ff0000","#b3b300","#009999");

// This function returns a random quote from the quote collection.
function getRandomQuote()
{
   let randNumber = Math.floor(Math.random() * quotes.length);
   return quotes[randNumber];
}

/* This function generates a random quote and prints it to the screen
whenever the user clicks the "Show another quote" button. */  
function printQuote()
{
  let randomQuote = getRandomQuote();

  let htmlOutput = '';  // the output that will be printed.

  let quote = '<p class="quote">' + randomQuote.quote  + '</p>';  // the quote
  htmlOutput += quote;

  let source = '<p class="source">' +  randomQuote.source;        // the source
  htmlOutput += source;

  if (randomQuote.citation)  // the citation will be added to the output only if it exists.
  {
      let citation = '<span class="citation">' + randomQuote.citation + '</span>';
      htmlOutput += citation;
  }
      
  if (randomQuote.year)      // the year will be added to the output only if it exists.
  {
      let year = '<span class="year">' + randomQuote.year + '</span>';
      htmlOutput += year;
  }

  let tags = '<p class="tags">' +  randomQuote.tags.join(" , ");        // the tags
  htmlOutput += tags;

  htmlOutput += '</p>';    // end of output.  
  
  let quoteBoxDiv = document.getElementById("quote-box");  // connection th HTML file.   
  quoteBoxDiv.innerHTML = htmlOutput;
  
  document.querySelector("body").style.background = getRandomColor();  // change background color.
  
}

// This function returns a random color from the colors container
function getRandomColor()
{
  let randNumber = Math.floor(Math.random() * colors.length);
  return colors[randNumber];
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);  // event listener.

