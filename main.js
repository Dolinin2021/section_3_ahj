/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/game.js
class Game {
  constructor(holeGame) {
    this.playing = true;
    this.activeHole = 0;
    this.holeGame = holeGame;
    this.child = this.holeGame.children;
  }
  next() {
    let next = () => setTimeout(() => {
      if (!this.playing) {
        return;
      }
      this.child[this.activeHole].className = "hole";
      this.activeHole = Math.floor(1 + Math.random() * 7);
      this.child[this.activeHole].className = "hole hole_has-mole";
      next();
    }, 1000);
    this.holeGame.onclick = function (event) {
      if (event.target.classList.contains("hole_has-mole")) {
        event.target.classList.remove("hole_has-mole");
        next.clearTimeout;
      }
    };
    next();
  }
}
;// CONCATENATED MODULE: ./src/js/counter.js
class Counter {
  constructor(dead, lost) {
    this.countDead = 0;
    this.countLost = 0;
    this.dead = dead;
    this.lost = lost;
  }
  increment() {
    for (let index = 1; index < 10; index++) {
      const getHole = index => document.getElementById(`hole${index}`);
      let data = getHole(index);
      let gameOver = false;
      data.onclick = () => {
        if (data.classList.contains("hole_has-mole")) {
          this.dead.textContent = Number(this.dead.textContent) + 1;
          this.countDead++;
        } else {
          this.lost.textContent = Number(this.lost.textContent) + 1;
          this.countLost++;
        }
        if (this.countDead === 10) {
          alert("Вы победили!");
          gameOver = true;
        } else if (this.countLost === 5) {
          alert("Вы проиграли!");
          gameOver = true;
        }
        if (gameOver) {
          this.countDead = 0;
          this.countLost = 0;
          window.location.reload();
        }
      };
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const holeGame = document.querySelector(".hole-game");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const game = new Game(holeGame);
const counter = new Counter(dead, lost);
game.next();
counter.increment();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;