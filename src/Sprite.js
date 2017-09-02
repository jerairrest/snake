class Sprite {
  constructor(gameRegion, width, height, className = "sprite") {
    this._gameRegion = gameRegion;
    this.className = className;

    this.width = width;
    this.height = height;
    this.coord = {
      x: 0,
      y: 0
    };

    this.el = null;
  }

  redraw() {
    this.el.style.top = this.coord.y + "px";
    this.el.style.left = this.coord.x + "px";
  }

  update(coord) {
    let oldCoord = this.coord;

    this.coord = coord;

    return oldCoord;
  }

  createInDOM(coord) {
    this.el = document.createElement("div");
    this.el.classList.add(this.className);

    this.setCoord(coord);
    this._gameRegion.appendChild(this.el);
    this.redraw();
  }

  destroyiInDOM() {
    this.el.remove();
  }

  willCollide(coord, dimensions) {
    const obj1 = {
      x: this.coord.x,
      y: this.coord.y,
      width: this.width / 2,
      height: this.height / 2
    };

    const obj2 = {
      x: coord.x,
      y: coord.y,
      width: dimensions.width / 2,
      height: dimensions.height / 2
    };

    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.height + obj1.y > obj2.y
    );
  }

  setCoord(coord) {
    this.coord = {
      ...coord
    };
  }

  getCoord() {
    return this.coord;
  }

  getDimensions() {
    return {
      width: this.width,
      height: this.height
    };
  }
}

export default Sprite;
