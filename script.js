quote = document.getElementById("quote");
quotes = [
    "\"You have to put the CD <em>in</em> your computer\"",
    "I went to the store store and bought the store of stores that don't sell themselves. Can I sell this store in this store?",
    "Artinian reciprocity is just quadratic reciprocity adhering to DEI standards."
];
quote.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];