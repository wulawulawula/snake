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


export default ScorePanel
