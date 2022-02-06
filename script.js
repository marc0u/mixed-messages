const { phrases } = require("./phrases");

const randomMessage = phrases => console.log(phrases[Math.floor(Math.random() * phrases.length)]);

randomMessage(phrases);