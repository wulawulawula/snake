class Snake {
    // 表示蛇头的元素
    head:HTMLElement;
    // 表示蛇的身体（包括蛇头）
    bodies:HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement
    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
    }


    // 获取蛇头的X坐标
    get X(){
        return this.head.offsetLeft
    }

    get Y(){
        return this.head.offsetTop
    }

    set X(value:number){
        this.head.style.left = value + 'px'
    }

    set Y(value:number){
        this.head.style.top = value + 'px'
    }

    addBody(){
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

}

export default Snake