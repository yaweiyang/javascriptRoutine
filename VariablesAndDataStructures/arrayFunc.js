// JavaScript 变量和数据结构 数组、栈、队列、链表、集合、字典和散列表、树、图

// 数组 Array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arr6 = [1, 2, 3, 2, 1, 3];
let arr7 = [{ name:'yangyawei', score:100}, { name:'yangmeili', score:105}, { name:'xiaohong', score:23}, { name:'xiaoming', score:60}, { name:'xiaobai', score:80}];

let isEven = function (x) {
    return (x % 2 === 0);
};

let isEven1 = function (x) {
    console.log(x % 2 === 0);
};
// concat 拼接数组
// let arr = arr1.concat(arr2, arr3);

// join 数组输出为字符串 参数为每个元素的间隔符号 默认逗号
// let arr = arr4.join('*');

// 删除数组中的最后一个元素并返回最后一个元素
// let arr = arr4.pop();
// console.log(arr4);

// 在数组末尾添加元素 返回值为新数组的长度
// let arr = arr4.push(6);
// console.log(arr4);

// 删除数组中第一个元素并返回第一个元素
// let arr = arr4.shift();
// console.log(arr4);

// 翻转数组的顺序 没有返回值
// arr4.reverse();
// let arr = arr4;

// 对数组进行排序 没有返回值 排序的方法可以自定义
// arr6.sort();
// let arr = arr6;
// arr7.sort((a,b)=>{
//     if (a.score >= b.score){
//         return 1;
//     } else{
//         return -1;
//     }
// });
// console.log(arr7);

// 以数组的形式返回指定范围内的数组
// let arr = arr4.slice(4, 7);

// 向数组中添加、删除、替换元素 并返回被删除的项目
// let arr = arr4.splice(1, 0, 'a');

// let arr =arr4.splice(1,1,'a');

// let arr = arr4.splice(1,2, 'a');// 第三个参数不存在时删除元素不添加元素
// console.log(arr4);


console.log(arr);


