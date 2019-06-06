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

// alarm();

/**
 * 查找数组中相同的元素并删除至一个
 * @param arr
 * @returns {*}
 */
function deleteSameElementInArray(arr) {
    console.log(arr);
    if(arr.length <= 1)
        return arr;
    let curIndex = 0;
    while (curIndex < arr.length-1) {
        let curElement = arr[curIndex];
        let lastIndex = arr.lastIndexOf(curElement);
        // console.log('数组中存在多个元素%s，位置分别为：%d  %t',curElement,curIndex,lastIndex);
        if (lastIndex === curIndex) {
            curIndex ++;
        } else {
            arr.splice(lastIndex, 1);
        }
    }
    return arr;
}

// console.log(deleteSameElementInArray([1,3,5,7,9,11,20,3,6,8,9,13,12,3,5,20,78,56,12,23]));

// 递归实现 n + (n - 1) + (n - 2) + ... + 1 

function digui(num) {
    if (num == 1) return 1;
    return digui(num - 1) + num;
}

// console.log(digui(3));

// 要求实现打印123456  隔3秒打印
function diguiTest (count) {
    var func = function (callback) {
        setTimeout(() => {
            console.log(count);
            if (callback != null) {
                callback();
            }
        }, 3000);
    };

    if (count == 6) {
        func();
    } else {
        func(()=>{
            diguiTest(count + 1);
        });
    }
}
diguiTest(1);