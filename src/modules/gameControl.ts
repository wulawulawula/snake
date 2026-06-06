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
    isLive: boolean = true;
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
        // 修改X和Y的值
        this.checkFood(X, Y)
        try {
            this.snake.X = X
            this.snake.Y = Y
            this.snake.checkHeadBody()
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
                this.isLive = false
                return
            }
        }
        this.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
        
    }

    // 检查是否吃到食物了
    checkFood(X:number,Y:number){
        if(X === this.food.XY[0] && Y === this.food.XY[1]){
            // 重置食物的位置
            this.food.change()
            // 增加分数
            this.scorePanel.addScore()
            // 增加蛇的身体
            this.snake.addBody()
        }
    }
}

export default GameControl