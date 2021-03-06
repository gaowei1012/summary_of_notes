/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-27 09:46:33
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-27 10:24:42
 * @Description: 了解Set以及Map
 * @Comments: 这里是ES6新增的 Set 集合方法，在实际业务中会用到去重
 * @Excitation: 这里的可以在实际业务中是使用，比如说之前的使用 for 去重，现在可以使用 Set 去重，再接再厉
 */

function setDemo() {
  const obj = new Set();
  [1, 2, 3, 4, 5, 3, 2, 1, 1, 3, 4].forEach((i) => obj.add(i));
  /**
   * 简要说明为什么会输出[1,2,3,4]
   * 1、通过new Set().add去添加属性
   * !!! 2、 Set中的所有成员都是唯一的
   */

  // Set 去重
  const temp = new Set([1, 2, 4, 5, 6, 1, 3, 4]);
  const arr = [...temp]; // 1,2,4,5,6,3
  console.log("arr==>", arr);
  /**
   * 1、首先 set 时候会对数组去重
   * 2、对数组中的每一成员 乘 2
   * 输出：{4, 6, 8}
   */
  const set = new Set([2, 3, 4]);
  set = new Set([...set].map((i) => i * 2));
  console.log("set==>", set);
  // se ===>  {4, 6, 8}

  // const mp = new Map(["name", "age"], ["张三", 12]);
  /**
   * 说说Map的属性方法
   * 1、new Map().get(xxx) ==> 获取某个键
   * 2、new Map().set(键,值) ==> 添加数据
   * 3、new Map().has(xx) ==> 判断是否包含某个键
   */
}
setDemo();
