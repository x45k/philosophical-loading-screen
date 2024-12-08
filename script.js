const quotes = [
    "The unexamined life is not worth living. — Socrates",
    "What is real? How do you define 'real'? — Morpheus",
    "The only thing I know is that I know nothing. — Socrates",
    "We live in the best of all possible worlds. — Leibniz",
    "Man is condemned to be free. — Sartre",
    "To be is to be perceived. — Berkeley",
    "Happiness is not an ideal of reason but of imagination. — Kant",
    "Hell is other people. — Sartre",
    "Reality is merely an illusion, albeit a very persistent one. — Einstein",
    "I think, therefore I am. — Descartes",
    "Not all those who wander are lost. — Tolkien",
    "Life is what happens when you're busy making other plans. — Lennon",
    "The journey of a thousand miles begins with one step. — Lao Tzu",
    "In the middle of difficulty lies opportunity. — Einstein",
    "Do what you can, with what you have, where you are. — Roosevelt",
    "That which does not kill us makes us stronger. — Nietzsche",
    "It always seems impossible until it is done. — Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Churchill",
    "The mind is everything. What you think you become. — Buddha",
    "Imagination is more important than knowledge. — Einstein"
];

const quoteElement = document.querySelector('.quote');

function updateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

setInterval(updateQuote, 5000);
