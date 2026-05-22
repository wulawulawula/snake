// 引入样式
import './style/index.less'

// 公共方法
// 判断两个数组是否完全一致
function arrEqual<T>(arr1: T[], arr2: T[]): boolean {
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}
// 定义食物类food

class Food {
    element: HTMLElement;

    constructor() {
        // 获取food的dom元素
        this.element = document.getElementById('food')!;
    }

    // 获取食物的XY坐标
    get XY() {
        return [this.element.offsetLeft, this.element.offsetTop]
    }

    change() {
        // 生成随机位置
        const left = Math.round(Math.random() * 29) * 10
        const top = Math.round(Math.random() * 29) * 10
        if (arrEqual(this.XY, [left, top])) {
            // 如果生成的位置和当前食物的位置一样，则重新生成
            this.change()
            return
        }
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
        console.log(this.XY)
    }
}

// 定义记分牌的类
class ScorePanel {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    // 设置一个最大等级
    maxLevel: number;
    // 设置多少分可以升一级
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 分数加分的方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.upScore === 0) {
            this.addLevel()
        }
    }
    // 升级的方法
    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

const scorePanel = new ScorePanel(5, 5)


const timeId = setInterval(() => {
    scorePanel.addScore()
    if(scorePanel.level === scorePanel.maxLevel){
        clearInterval(timeId)
        alert('游戏结束，恭喜你达到了最高等级！')
    }
},500)
