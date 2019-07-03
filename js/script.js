/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

// array of quotes
let quotes = [ ];

// famous quotes
let quote1 = 
{
   quote:   "Strive not to be a success, but rather to be of value." ,
   source:  "Albert Einstein"
};

let quote2 = 
{
  quote:   "The journey of a thousand miles begins with one step." ,
  source:  "Lao Tzu"
};

let quote3 = 
{
  quote:      "This is the beginning of a beautiful friendship." ,
  source:     "Casablanca" ,
  citation:   "movie" ,
  year: 1947
};

let quote4 = 
{
  quote:      "Always remember that you are absolutely unique. Just like everyone else" ,
  source:     "Margaret Mead" 
};

let quote5 = 
{
  quote:      "You only live once, but if you do it right, once is enough." ,
  source:     "Mae West" 
};

let quote6 = 
{
  quote:      "Love the life you live. Live the life you love" ,
  source:     "Bob Marley"       
};

let quote7 = 
{
  quote:      "Live life to the fullest, and focus on the positive." ,
  source:     "Matt Cameron"
};

let quote8 = 
{
  quote:      "There's no place like home." ,
  source:     "The Wizard of Oz" ,
  citation:   "book" ,
  year: 1900
};

// pushing the quotes to the array
quotes.push(quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8);

// logging quotes array to the console
console.log(quotes);








/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.