/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Name: Snir Holland
Date: 04/07/2019
******************************************/

// a timer that generates a new quote every few seconds
const interval = setInterval(printQuote,20000);

// a container of famous quotes
const quotes = [
{
   quote:     "Strive not to be a success, but rather to be of value." ,
   source:    "Albert Einstein",
   tags:      ["Inspirational", "Attitude", "Success"]
} ,

{
  quote:   "The journey of a thousand miles begins with one step." ,
  source:  "Lao Tzu" ,
  tags:      ["Motivational", "Hope", "Future"]
} ,
 
{
  quote:      "This is the beginning of a beautiful friendship." ,
  source:     "Casablanca" ,
  citation:   "Movie" ,
  year:       1947 ,
  tags:      ["Romantic", "Friendship", "Love", "Movies"]
} ,
 
{
  quote:      "Always remember that you are absolutely unique. Just like everyone else" ,
  source:     "Margaret Mead"  ,
  tags:       ["Humor", "Society", "Positive"]
} ,
 
{
  quote:      "You only live once, but if you do it right, once is enough." ,
  source:     "Mae West" ,
  tags:       ["Life" , "Attitude"]
} ,
 
{
  quote:      "Love the life you live. Live the life you love" ,
  source:     "Bob Marley" ,
  citation:   "Song" ,
  tags:       ["Life", "Positive", "Attitude"]       
} ,
 
{
  quote:      "Live life to the fullest, and focus on the positive." ,
  source:     "Matt Cameron" ,
  tags:       ["Life", "Future", "Positive", "Attitude"]
} ,
 
{
  quote:      "There's no place like home." ,
  source:     "The Wizard of Oz" ,
  citation:   "book" ,
  year:        1900 ,
  tags:       ["Home", "Happiness"]
} ,
 
{
  quote:      "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind." ,
  source:     "Dr. Seuss" ,
  tags:       ["Attitude", "Society", "Courage"] 
}  
];

// a container of colors 
const colors = ["#ff00bf","#0099cc","#b300b3","#ff3300","#00004d","#33cc33","#ff0000","#b3b300","#009999"];

// This function returns a random quote from the quote collection.
function getRandomQuote()
{
   let randNumber = Math.floor(Math.random() * quotes.length);
   return quotes[randNumber];
}

// This function generates a random quote and prints it to the screen
function printQuote()
{
  let randomQuote = getRandomQuote();

  let htmlOutput = '';  // the output that will be printed.

  let quote = '<p class="quote">' + randomQuote.quote  + '</p>';  // the quote
  htmlOutput += quote;

  let source = '<p class="source">' +  randomQuote.source;        // the source
  htmlOutput += source;

  if (randomQuote.hasOwnProperty('citation'))  // the citation will be added to the output only if it exists.
  {
      let citation = '<span class="citation">' + randomQuote.citation + '</span>';
      htmlOutput += citation;
  }
      
  if (randomQuote.hasOwnProperty('year'))      // the year will be added to the output only if it exists.
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

