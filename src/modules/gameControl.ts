// 游戏控制器，控制其他的所有类
import Food from './food'
import ScorePanel from './scorePanel'
import Snake from './snake'

class GameControl {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init()
    }

    keydownHandler(event: KeyboardEvent) {
        console.log(event.key)
        this.direction = event.key
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.move()
    }

    move() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10
                break;
            case 'ArrowDown':
                Y += 10
                break;
            case 'ArrowLeft':
                X -= 10
                break;
            case 'ArrowRight':
                X += 10
                break;
        }

        this.snake.X = X
        this.snake.Y = Y

        setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
}

export default GameControl