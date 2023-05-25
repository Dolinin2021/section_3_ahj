import Game from "./game.js";
import Counter from "./counter.js";

const holeGame = document.querySelector(".hole-game");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const game = new Game(holeGame);
const counter = new Counter(dead, lost);

game.next();
counter.increment();
