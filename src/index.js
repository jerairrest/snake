import AppleFactory from "./AppleFactory";
import Snake from "./Snake";
import GameController from "./GameController";

import "./main.css";

{
  const gameController = new GameController();
  gameController.createGameArea();

  const appleFactory = new AppleFactory(gameController.getGameRegion());
  appleFactory.spawn(20);

  const snake = new Snake(gameController.getGameRegion());
  snake.createInitialSnake();

  gameController.addSnakeToController(snake);
  gameController.addAppleFactoryToController(appleFactory);

  gameController.run();
}
