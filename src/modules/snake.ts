class Snake {
    // 表示蛇头的元素
    head: HTMLElement;
    // 表示蛇的身体（包括蛇头）
    bodies: HTMLCollectionOf<HTMLElement>;
    // 获取蛇的容器
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    }


    // 获取蛇头的X坐标
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！')
        }
        // 如果X轴没有发生改变，直接ruturn终止，优化性能
        if (this.X === value) {
            return
        }
        // 判断是否发生掉头
        if(this.bodies[1] && this.bodies[1].offsetLeft === value){
            // 判断有没有第二节，并且第二节的X轴坐标与当前输入的X轴坐标相等，说明发生掉头
            if(value > this.X){
                // 说明是向右掉头，此时应该继续让蛇往左走
                value = this.X - 10
            }else {
                value = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
    }

    set Y(value: number) {
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！')
        }
        // 如果Y轴没有发生改变，直接ruturn终止，优化性能
        if (this.Y === value) {
            return
        }
        // 判断是否发生掉头
        if(this.bodies[1] && this.bodies[1].offsetTop === value){
            // 判断有没有第二节，并且第二节的Y轴坐标与当前输入的Y轴坐标相等，说明发生掉头
            if(value > this.Y){
                // 说明是向下掉头，此时应该继续让蛇往上走
                value = this.Y - 10
            }else {
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', `<div></div>`)
    }


    moveBody(){
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 检查蛇头是否与身体相撞
    checkHeadBody(){
        for(let i = 1; i<this.bodies.length;i++){
            if(this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop){
                // 说明相撞了
                throw new Error('撞到自己了')
            }
        }
    }
}

export default Snake