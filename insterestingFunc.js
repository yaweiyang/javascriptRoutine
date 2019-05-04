/**
 * 每一秒输出一个从 0~4 的数字
 */
function alarm() {
    // 原本的for循环
    /*for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log();
        },1000);
    }*/

    // 第一种改进方案 涉及到var和let的相关知识点 作用域
    /*for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        },1000);
    }*/

    // 第二种改进方案 涉及到js立即执行函数的相关知识
    for (var i = 0; i < 5; i++) {
        (function (j) {
            setTimeout(function () {
                console.log(j);
            },1000);
        })(i);
    }
}

alarm();