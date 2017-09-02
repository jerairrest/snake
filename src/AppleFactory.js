import Apple from "./Apple";

class AppleFactory {
  constructor(gameRegion) {
    this._gameRegion = gameRegion;
    this.apples = [];
  }

  spawn(numToSpawn) {
    for (let i = 0; i < numToSpawn; i++) {
      const apple = new Apple(this._gameRegion);
      apple.createInDOM(this.getRandomCoords());
      this.apples.push(apple);
    }
  }

  checkApplesForCollisions(coord, dimensions) {
    let hadCollision = false;
    for (let i = 0; i < this.apples.length; i++) {
      if (this.apples[i].willCollide(coord, dimensions)) {
        this.apples[i].destroyiInDOM();
        this.apples.splice(i, 1);
        hadCollision = true;
      }
    }

    return hadCollision;
  }

  getRandomCoords(xOffset, yOffset) {
    return {
      x: this.randomizeCoordValue(this._gameRegion.offsetWidth),
      y: this.randomizeCoordValue(this._gameRegion.offsetHeight)
    };
  }

  randomizeCoordValue(val) {
    return Math.floor(val * Math.random());
  }
}

export default AppleFactory;
