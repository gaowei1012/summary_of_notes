/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-19 10:42:15
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-19 21:46:04
 * @Description: 实现一个使用原型链继承方式的函数
 * @Comments:
 * @Excitation:
 */

function Demo(name, age) {
  this.name = name;
  this.age = age;
}

function Demo1(gender, name, age) {
  this.gender = gender;
  Demo.call(this, name, age); // 继承Demo()的属性
}

let demo = new Demo1("男", "苏小妍", "12");
console.log("name==>", demo.name);
