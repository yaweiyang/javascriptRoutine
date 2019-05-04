/**
 * 随机生成指定长度的数组
 * @author yangyawei
 * @DateTime 2019-04-29T12:55:37+0800
 * @param    {number}                 length 数组长度
 * @return   {Array}                  arr    随机生成的数组
 */
function createArr(length) {
	var arr = [];
	for(var i=0; i<length; ++i) {
		let random =Math.floor(Math.random()*100) ;
		arr.push(random);
	}
	console.log(arr);
	return arr;
}

/**
 * 用于交换数组指定的两个元素
 * @author yangyawei
 * @DateTime 2019-04-29T12:44:27+0800
 * @param    {number}                 	frontIndex  [description]
 * @param    {number}                 	behindIndex [description]
 * @param    {Array}                 	arr         [description]
 * @return   {[type]}                             	[description]
 */
function swap(frontIndex, behindIndex, arr) {
	var temp = arr[frontIndex];
	arr[frontIndex] = arr[behindIndex];
	arr[behindIndex] = temp;
}

/**
 * 判断数组是否为升序排列
 * @author yangyawei
 * @DateTime 2019-05-01T00:09:45+0800
 * @param    {[type]}                 arr [description]
 * @return   {Boolean}                    [description]
 */
function isSorted(arr) {
	for (var i = 0; i < arr.length-1; ++i) {
		if (arr[i] > arr[i+1]) {
			return false;
		}
	}
	return true;
}

/**
 * 冒泡排序 ：1 2 3
 * @author yangyawei
 * @DateTime 2019-04-29T12:47:37+0800
 * @param    {Array}                 arr 未经排序的数组
 * @return   {type}                      [description]
 */
function bubbleSort(arr) {
	//  1 大值向后挪
	/*for (var i=0; i<arr.length; ++i) {
		for (var j=0; j<arr.length-i-1; ++j) {
			if (arr[j] > arr[j+1]) {
				swap(j, j+1, arr);
			}
		}
	}*/

	// 2 小值向前挪
	/*for (var i=0; i<arr.length; ++i) {
		for (var j=arr.length-1; j>i; --j) {
			if(arr[j] < arr[j-1]) {
				swap(j, j-1, arr);
			}
		}
	}*/

	// 3 初始
	for (var i=0; i<arr.length-1; ++i) {
		for (var j=i; j<arr.length; ++j) {
			if(arr[i] > arr[j]) {
				swap(i, j, arr);
			}
		}
	}
	return arr;
}

/**
 * 选择排序
 * @author yangyawei
 * @DateTime 2019-04-29T13:02:24+0800
 * @param    {Array}                 arr 未经排序的数组
 * @return   {[type]}                     [description]
 */
function selectionSort(arr) {
	for (var i = 0; i < arr.length-1; i++) {
		var min_Index = i;
		for (var j = i+1; j < arr.length; j++) {
			if(arr[min_Index] > arr[j]) {
				min_Index = j;
			}
		}
		swap(i, min_Index, arr);
	}
	return arr;
}

/**
 * 快排算法
 * @author yangyawei
 * @DateTime 2019-04-29T12:54:45+0800
 * @param    {Array}                 arr 未经排序的数组
 * @return   {Array}                 arr 经过排序之后的数组
 */
function qucikSort(arr) {
	if(arr.length <= 1){
		return arr;
	}
	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(pivotIndex, 1)[0];
	var left = [];
	var right = [];
	for (var i=0; i<arr.length; ++i) {
		if (arr[i] <= pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}	
	}
	return qucikSort(left).concat([pivot],qucikSort(right));
}

/**
 * 插入排序
 * @author yangyawei
 * @DateTime 2019-04-29T13:22:56+0800
 * @param    {Array}                 arr 未经排序的数组
 * @return   {Array}                     排序后的数组
 */
function insertSort (arr) {
	for (var i = 1; i < arr.length; i++) {
		for (var j = 0; j < i; j++) {
			if (arr[i] < arr[j]) {
				arr.splice(j, 0, arr[i]);
				arr.splice(i+1, 1);
				break;
			}
		}
	}
	/*
	for (var i = 1; i < arr.length; i++) {
		 var currentValue = arr[i];
		 for (var j = i; j > 0 && arr[j-1] > currentValue; j--) {
		 	arr[j] = arr[j-1];
		 }
		 arr[j] = currentValue;
	}
	*/

	/*for (var i = 0; i < arr.length-1; i++) {
		var currentValue = arr[i+1];
		for (var j = i; j >= 0; j--) {
			if (arr[j] > currentValue) {
				arr[j+1] = arr[j];
			} else {
				arr[j+1] = currentValue;
				break;
			}
			arr[j] = currentValue;
		}
	}*/
	return arr;
}

// console.log(qucikSort(createArr(20)));
// console.log(bubbleSort(createArr(10)));
// console.log(selectionSort(createArr(10)));
// console.log(insertSort(createArr(10)));

function alarm(){

	/*for (let i = 0; i < 5; i++) {
		setTimeout(function() {
			console.log(i);
		}, 1000*i);
	}*/

	for (var i=0; i<5; i++){
		(function(){
			setTimeout(function(){
				console.log(i);
			}, 1000*i);
		})(i);
	}
}
alarm();