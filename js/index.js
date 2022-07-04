window.onload = function () {
    let btn = document.querySelector(".bar")
    let text = document.querySelector(".text")
    let liArr = document.querySelectorAll(".text li")
    let imgArr = document.querySelectorAll(".text li img")
    let bar = document.querySelector(".bar")
    let barX = document.querySelector(".bar-X")
    //头部span的显示与隐藏
    btn.addEventListener('click', function () {
        barX.style.display = " block"
        bar.style.display = "none"
        text.style.display = "block"
    })
    barX.addEventListener('click', function () {
        barX.style.display = " none"
        bar.style.display = "block"
        text.style.display = "none"
    })


    //图片的切换
    for (let i = 0; i < liArr.length; i++) {
        liArr[i].addEventListener("mouseenter", function () {
            liArr[i].index = i
            console.log(liArr[i]);
            for (let i = 0; i < imgArr.length; i++) {
                imgArr[i].src = "./图片助手(ImageAssistant) 批量图片下载器/领克_领克汽车_Lynk&Co/bgz" + i + "_gray.png"
                // for (let i = 0; i < imgArr.length; i++) {
                //     imgArr[this.index].src = "./图片助手(ImageAssistant) 批量图片下载器/领克_领克汽车_Lynk&Co/bgz" + (this.index) + ".png"
                //     break;
                // }
            }
            imgArr[this.index].src = "./图片助手(ImageAssistant) 批量图片下载器/领克_领克汽车_Lynk&Co/bgz" + (this.index) + ".png"
        })
        liArr[i].addEventListener("mouseleave", function () {
            for (let i = 0; i < imgArr.length; i++) {
                imgArr[i].src = "./图片助手(ImageAssistant) 批量图片下载器/领克_领克汽车_Lynk&Co/bgz" + i + "_gray.png"
            }
        })
    }
    //轮播图JS
    let mian = document.querySelector(".mian")
    let boxw = mian.clientWidth
    let mianBox = document.querySelector(".mian-box")
    // console.log(mianBox);
    let BoxArr = mianBox.children
    let leng = mianBox.children.length
    let leftBtn = document.querySelector(".leftBtn")
    // console.log(leftBtn);
    let count = 0

    leftBtn.onclick = function () {
        count--
        if (count < 0) {
            count = leng - 1
        }
        mianBox.style.left = count * - boxw + "px"
    }

    let rightBtn = document.querySelector(".rightBtn")
    rightBtn.onclick = function () {
        count++
        if (count > leng - 1) {
            count = 0
        }
        mianBox.style.left = count * - boxw + "px"
    }


    let time = setInterval(function () {
        rightBtn.onclick()
    }, 2000)
    mian.addEventListener("mouseover", function () {
        rightBtn.style.display = "block"
        leftBtn.style.display = "block"
        clearInterval(time)
    })
    mian.addEventListener("mouseout", function () {
        rightBtn.style.display = "none"
        leftBtn.style.display = "none"
        time = setInterval(function () {
            rightBtn.onclick()
        }, 2000)
    })


    //图片car 的切换
    let carimg = document.querySelector(".carimg")
    let carleft = document.querySelector(" .carrun-left")
    let carright = document.querySelector(".carrun-right")
    let carimg2 = document.querySelector(".carimg2")

    carleft.onmouseenter = function () {
        carimg.src = "./图片助手(ImageAssistant) 批量图片下载器/领克_领克汽车_Lynk&Co/2 (1).png"
    }

    carleft.onmouseleave = function () {
        carimg.src = "./图片助手(ImageAssistant) 批量图片下载器/领克_领克汽车_Lynk&Co/1 (1).png"
    }
    carright.onmouseenter = function () {
        carimg2.src = "./图片助手(ImageAssistant) 批量图片下载器/领克_领克汽车_Lynk&Co/4 (1).png"
    }

    carright.onmouseleave = function () {
        carimg2.src = "./图片助手(ImageAssistant) 批量图片下载器/领克_领克汽车_Lynk&Co/3 (1).png"
    }


    //渐变
    let a = document.querySelectorAll(".text-a")
    // console.log(a);
    let cartextShow = document.querySelectorAll(".cartext-show")
    for (let i = 0; i < a.length; i++) {
        a[i].index = i
        a[i].onmouseenter = function () {
            cartextShow[this.index].style.width = "180px"
        }
        a[i].onmouseleave = function () {
            cartextShow[this.index].style.width = "5px"
        }
    }


    //页面滚轮事件
    let carrun = document.querySelector(".carrun")
    let cartext = document.querySelector(".cartext")
    let cartext2 = document.querySelector(".cartext2")
    // console.log(carrun.offsetHeight);


    window.onscroll = function () {
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(t);
        if (t >= carrun.offsetHeight + 200) {
            cartext.style.left = "300px"
            cartext2.style.right = "-1100px"
        } else {
            cartext.style.left = "-200px"
            cartext2.style.right = "-1600px"
        }

    }

    let top = document.querySelector(".top")
    let timer = null;
    top.onclick = function () {
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
            let oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = oTop - 10;
                timer = requestAnimationFrame(fn);
            } else {
                cancelAnimationFrame(timer);
            }
        });
    }

}

