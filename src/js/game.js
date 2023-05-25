export default class Game {
  constructor(holeGame) {
    this.playing = true;
    this.activeHole = 0;
    this.holeGame = holeGame;
    this.child = this.holeGame.children;
  }

  next() {
    let next = () =>
      setTimeout(() => {
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
