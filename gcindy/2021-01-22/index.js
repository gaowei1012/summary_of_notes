/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-22 14:36:16
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-22 14:54:22
 * @Description: 每日一题
 * @Comments:
 * @Excitation:
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
function demo1() {}
