quote = document.getElementById("quote");
quotes = [
    "\"You have to put the CD <em>in</em> your computer\"",
    "I went to the store store and bought the store of stores that don't sell themselves. Can I sell this store in this store?",
    "Artinian reciprocity is just quadratic reciprocity adhering to DEI standards.",
    "Why was 7 afraid of 8? Because 8 9 10.",
    "We have narrowed the phrase \"same time last week\" as being invented after a week.",
    "I've figured out how to have my fork and eat my cake too.",
    "mfw Dijkstra algorithm removed ⅔ the edges of my family tree",
    "The word \"is\", painted on the wall, with the tail of the 's' being connected to the penstroke of an anthropomorphic representation of the word \"the\".",
    "Tornado watch? I suppose it does rotate.",
    "Not unplugging your microwave before bed is a lot like walking around the park without a condom on."
];
quote.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];