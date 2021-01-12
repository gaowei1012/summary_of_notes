/**
 * 填充数组: array(填充几位数).fill(填充内容) ==> 可以理解为创建一个新的带有内容的数组
 * 合并数组: array.contact(array1)
 * ?根据数组获取第一个查询索引: array.indexOf(xx) ==> 不存在返回-1
 * 根据数组获取最后一个查询索引: array.lastIndexOf(xx)
 * 查询数组中是否包含某个值: array.includes(xx)
 * 判断是否为数组: Array.isArray(array)
 * 数组转字符串: array.toString()
 * 数组拼接并返回字符串: array.join(xx) ==> xx非必填
 * 删除数组任意一个元素: array.splice(开始位置,删除个数,插入节点) ==> 如不填写这些参数则返回空数组
 * 删除数组尾部数据: array.pop()
 * 删除数组头部数据: array.shift()
 * 在数组尾部添加数据: array.push(xx)
 * 在数组头部添加数据: array.unshift()
 * 翻转数组: array.reverse()
 * 对数组进行排序: array.sort() ==> 根据26字母进行排序
 */
function demo() {
  const array = ["sa", "sd", "sf"];
  array[1] = "gyb";
  console.log("修改数组某一个元素==>", array); // ["sa", "gyb", "sf"]
  console.log("fill==>", Array(4).fill("n"));
  console.log("contact==>", array.concat(Array(4).fill("n"))); // ["sa", "gyb", "sf", "n", "n", "n", "n"]
  console.log("indexOf==>", array.indexOf("sa")); // 0
  console.log(
    "lastIndexOf==>",
    array.lastIndexOf("g"),
    array.lastIndexOf("gyb")
  ); // -1 1
  console.log("includes==>", array.includes("g"), array.includes("gyb")); // false true
  console.log("isArray==>", Array.isArray(array)); // true
  console.log("toString==>", array.toString()); // sa,gyb,sf
  console.log("join==>", array.join()); // sagybsf
  /* 从第一位开始删除一个元素 */
  const array1 = array.splice(1, 1);
  console.log("splice==>array1", array1, array); // ["gyb"] ["sa", "sf"]
  // 从第二位开始删除0个元素，并把第二位替换成89
  const array2 = array.splice(2, 0, "89");
  console.log("splice==>array1", array2, array); // [] ["sa", "sf", "89"]
  console.log("pop==>", array.pop(), array); // 89 ["sa", "sf"]
  console.log("shift==>", array.shift(), array); // sa ["sf"]
  console.log("unshift==>", array.unshift("sa"), array); // 2 ["sa", "sf"]
  console.log("reverse==>", array.reverse()); // ["sf", "sa"]
  array[0] = "sd";
  array[1] = "bd";
  array[2] = "cd";
  console.log("sort==>", array.sort()); // ["bd", "cd", "sd"]
}
// demo();

/**
 * 对于数组的常用方法整理比较详细，每一个案例都会有自己详细的注释，
 * 可以将不同的进行分类总结，例如：
 * 1、
 *  const arr = [1, 2, 3]
 *  arr.indexOf(4) // -1
 *  没返回值的时候会返回-1
 *  有匹配会返回值 0
 *
 *  ****再接再厉*****
 */

/**
 * object.keys(obj): 获取对象的所有key,obj为自己定义的对象名
 * object.values(obj): 获取对象的所有value,obj为自己定义的对象名
 * object.entries(obj): 获取对象的所有key和所有value,obj为自己定义的对象名
 * obj.hasOwnProperty(str): 判断对象是否包含某个key
 */
function demo1() {
  const obj = {
    name: "龚铱白",
    age: 12,
    sex: "女",
  };
  console.log("entries==>", Object.entries(obj));
  console.log("hasOwnProperty==>", obj.hasOwnProperty(12));
}
demo1();
