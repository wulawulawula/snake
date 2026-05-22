// 引入样式
import './style/index.less'

// 定义食物类food

class Food {
    element:HTMLElement;

    constructor(){
        // 获取food的dom元素
        this.element = document.getElementById('food')!;
    }

    // 获取食物的XY坐标
    get XY(){
        return [this.element.offsetLeft, this.element.offsetTop]
    }

    change(){
        // 生成随机位置
        const left = Math.round(Math.random() * 29) * 10
        const top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
        console.log(this.XY)
    }
}

const food = new Food()
console.log(food.XY)
food.change()