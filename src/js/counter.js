export default class Counter {
  constructor(dead, lost) {
    this.countDead = 0;
    this.countLost = 0;
    this.dead = dead;
    this.lost = lost;
  }

  increment() {
    for (let index = 1; index < 10; index++) {
      const getHole = (index) => document.getElementById(`hole${index}`);
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
