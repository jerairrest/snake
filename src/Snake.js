import Sprite from "./Sprite";
import SnakeSegment from "./SnakeSegment";

class Snake {
  constructor(gameRegion) {
    this._gameRegion = gameRegion;
    this.xVector = 1;
    this.yVector = 0;
    this.speed = 0.2;

    document.addEventListener("keyup", e => {
      switch (e.code) {
        case "ArrowUp":
          this.setVectors(0, -1);
          break;
        case "ArrowDown":
          this.setVectors(0, 1);
          break;
        case "ArrowLeft":
          this.setVectors(-1, 0);
          break;
        case "ArrowRight":
          this.setVectors(1, 0);
          break;
      }
    });

    this.snakeSegments = [];
  }

  update(delta) {
    let updatedHeadCoord = this.getHeadCoord(
      delta,
      this.snakeSegments[0].getCoord()
    );

    let nexSegment = this.snakeSegments[0].update(updatedHeadCoord);
    for (let i = 1; i < this.snakeSegments.length; i++) {
      nexSegment = this.snakeSegments[i].update(nexSegment);
    }

    return updatedHeadCoord;
  }

  redraw() {
    for (let i = 0; i < this.snakeSegments.length; i++) {
      this.snakeSegments[i].redraw();
    }
  }

  getHeadCoord(delta, coord) {
    let xDiff = delta * this.xVector * this.speed;
    let yDiff = delta * this.yVector * this.speed;

    return {
      x: coord.x + xDiff,
      y: coord.y + yDiff
    };
  }

  getHeadDimensions() {
    return this.snakeSegments[0].getDimensions();
  }

  setVectors(x, y) {
    this.xVector = x;
    this.yVector = y;
  }

  createInitialSnake() {
    for (let i = 0; i < 20; i++) {
      this.addSegment({ x: 200 - i * 20, y: 200 });
    }
  }

  enlargeAndIncreaseSpeed() {
    let lastCoord = this.snakeSegments[
      this.snakeSegments.length - 1
    ].getCoord();

    let newX = lastCoord.x;
    let newY = lastCoord.y;

    for (let i = 0; i < 20; i++) {
      this.addSegment({ x: newX, y: newY });
    }

    this.speed = this.speed + this.speed / 10;
  }

  addSegment(coord) {
    const segment = new SnakeSegment(this._gameRegion);
    segment.createInDOM(coord);
    this.snakeSegments.push(segment);
  }
}

export default Snake;
