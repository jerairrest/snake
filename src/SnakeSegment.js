import Sprite from "./Sprite";

class SnakeSegment extends Sprite {
  constructor(gameRegion) {
    super(gameRegion, 50, 50, "snake");
  }
}

export default SnakeSegment;
