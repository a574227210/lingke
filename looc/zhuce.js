window.onload = function () {
    //设置盒子的背景宽高
    let bgc = document.querySelector("#bgcImg")
    bgc.style.width = innerWidth + "px"
    bgc.style.height = innerHeight + "px"
    //获取canvas对象
    let canvas = document.querySelector("#canvas")
    //获取画笔
    let context = canvas.getContext('2d');
    //设置canvas的宽高
    canvas.height = innerHeight
    canvas.width = innerWidth
    //定义一个粒子数组
    let par = []
    //定义页面内粒子的数量
    let count = parseInt(canvas.width / 80 * canvas.height / 80)
    //定义粒子类
    class particle {
        constructor(x, y) {
            this.x = x
            this.y = y
            //x,y轴的移动速度 -0.5   -0.5
            this.directionX = Math.random() - 0.5
            this.directionY = Math.random() - 0.5
        }

        //更新点的坐标
        update() {
            this.x += this.directionX
            this.y += this.directionY
        }
        //绘制粒子
        draw() {
            context.beginPath();
            context.arc(this.x, this.y, 2, 0, Math.PI * 2);
            context.closePath();
            context.fillStyle = 'white';
            context.fill();
        }
    }
    //创建粒子
    function creat() {
        //生成一个点的随机坐标
        let x = Math.random() * innerWidth
        let y = Math.random() * innerHeight
        par.push(new particle(x, y))
    }
    //处理粒子
    //先更新坐标，在绘制出来
    function hand() {
        for (let i = 0; i < par.length; i++) {
            let part = par[i]
            part.update()
            part.draw()
            // 超出范围就将这个粒子删除
            if (part.x < 0 || part.x > canvas.width || part.y < 0 || part.y > canvas.height) {
                par.splice(i, 1)
            }
            //绘制俩点之间的连线
            for (let j = 0; j < par.length; j++) {
                let dx = par[j].x - par[i].x;
                let dy = par[j].y - par[i].y;
                dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
                if (dist < 100) {
                    context.beginPath();
                    context.strokeStyle = 'rgba(255,255.255)' + (1 - dist / 100);
                    context.moveTo(par[i].x, par[i].y);
                    context.lineTo(par[j].x, par[j].y);
                    context.closePath();
                    lineWidth = 1
                    context.stroke();

                }
            }
        }
    }

    function draw() {
        //首页清空画布
        context.clearRect(0, 0, canvas.width, canvas.height);
        //如果粒子数量小于规定数量就生成粒子
        if (par.length < count) {
            creat()
        }
        //处理定时器
        hand()
    }
    //设置定时器
    setInterval(draw, 10)
}