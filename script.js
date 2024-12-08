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
    "Imagination is more important than knowledge. — Einstein",
    "Life is really simple, but we insist on making it complicated. — Confucius",
    "Act as if what you do makes a difference. It does. — William James",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "The best way to predict the future is to invent it. — Alan Kay",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. — Emerson",
    "An ounce of practice is worth a thousand words. — Gandhi",
    "Everything you can imagine is real. — Picasso",
    "You must be the change you wish to see in the world. — Gandhi",
    "Life is short, and it is here to be lived. — Kate Winslet",
    "Do what you love, and you will never work a day in your life. — Confucius",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "If you want to live a happy life, tie it to a goal, not to people or things. — Einstein",
    "Everything has beauty, but not everyone sees it. — Confucius",
    "Do one thing every day that scares you. — Eleanor Roosevelt",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "If you can dream it, you can do it. — Walt Disney"
];

const quoteElement = document.querySelector('.quote');

function updateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

setInterval(updateQuote, 5000);