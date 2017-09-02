class GameController {
  constructor() {
    this.fps = 60;
    this.maxFPS = 60;

    this.lastFrameTimeMs = 0;
    this.lastFpsUpdate = 0;
    this.framesThisSecond = 0;
    this.delta = 0;
    this.timestep = 1000 / 60;

    this.gameRegion = null;
    this.snake = null;
    this.appleFactory = null;
  }

  addSnakeToController(snake) {
    this.snake = snake;
  }

  addAppleFactoryToController(appleFactory) {
    this.appleFactory = appleFactory;
  }

  createGameArea() {
    this.gameRegion = document.createElement("div");
    this.gameRegion.id = "app";
    document.body.insertBefore(this.gameRegion, document.body.firstChild);
  }

  getGameRegion() {
    return this.gameRegion;
  }

  getMainLoop() {
    return this.mainLoop.bind(this);
  }

  run() {
    requestAnimationFrame(this.getMainLoop());
  }

  /**
   * Main event loop that runs the animation based upon the blog post: 
   * http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
   */
  mainLoop(timestamp) {
    if (timestamp < this.lastFrameTimeMs + 1000 / this.maxFPS) {
      requestAnimationFrame(this.mainLoop.bind(this));
      return;
    }
    this.delta += timestamp - this.lastFrameTimeMs;
    this.lastFrameTimeMs = timestamp;

    if (timestamp > this.lastFpsUpdate + 1000) {
      this.fps = 0.25 * this.framesThisSecond + 0.75 * this.fps;

      this.lastFpsUpdate = timestamp;
      this.framesThisSecond = 0;
    }
    this.framesThisSecond++;

    while (this.delta >= this.timestep) {
      //Main update loop
      const headCoord = this.snake.update(this.timestep);
      const hadCollision = this.appleFactory.checkApplesForCollisions(
        headCoord,
        this.snake.getHeadDimensions()
      );

      if (hadCollision) {
        this.snake.enlargeAndIncreaseSpeed();
      }

      this.delta -= this.timestep;
    }

    //Redraw the entire snake
    this.snake.redraw();

    requestAnimationFrame(this.mainLoop.bind(this));
  }
}

export default GameController;
