/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-22 14:36:16
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-22 15:49:08
 * @Description: 每日一题
 * @Comments: 这里的题目相对于较难，不会也没关系
 * @Excitation:
 *  第一道 应该是 false !![0] === true, 那么 [0] === false, 所以 输出 false
 *  第二道 class 本身就是一个 构造函数 可以直接写在外围
 *  class A {
 *    constructor() {
 *        // TODO
 *      }
 *  }
 *  class 是ES6中新增的语法，来简化我们创建构造函数， 可以理解为语法糖
 * 
 *  this 指向性问题回答的不错，在 class 中 this 一定指向他自己
 *   
 */
//
// 可以用作用域，var定义量来思考🤔
/**
 * 下面输出什么， 为什么？
 * 可以用作用域，var定义量来思考🤔
 * todo:提示：!![] --> true ， !![0] --> true
 * !思路: !!a == true !a == false a == true
 */
function demo() {
  var a = [0];
  if (a) {
    console.log("a == true", a); // yes
  } else {
    console.log("a == false", a); 
  }
}
demo();

function demo1() {
  var a = [0]; // 普通我们定义一个构造函数
  // function A(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }
  // // 借助原型，来一版
  // A.prototype.hello = function () {
  //   return "(" + this.x + "," + this.y + ")"; // 这时候的this指向的是A
  // };

  // let ademo = new A(1, 2);
  // console.log("a==>", ademo);

  class A {
    constructor(x, y) {
      // 这里的this还是指向A
      this.x = x;
      this.y = y;
    }
    hello() {
      return "(" + this.x + "," + this.y + ")";
    }
  }
  console.log(
    "判断A是否为function并指向构造函数==>",
    A === A.prototype.constructor
  );
  // 实例化A
  let ademo = new A(1, 2);
  console.log(ademo);

  class B {
    constructor(str) {
      this.str = str;
    }

    /**
     * window下的this 指向全局
     * B中的this 指向B
     */

  }
}
demo1();
