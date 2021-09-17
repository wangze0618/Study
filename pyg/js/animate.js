// 缓动动画函数封装 obj目标对象 | target目标位置
function animate(obj, target, callback) {
    // 防止点击多次动画错误
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        // obj.style.position = 'absolute';

        // 缓动动画步长公式
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback() //执行回调函数
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}
