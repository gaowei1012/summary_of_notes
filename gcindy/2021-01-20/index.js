/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-20 14:30:56
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-20 14:47:10
 */

/**
 * Object.assign(a,b)==>合并对象
 */
function demo() {
  const student = {
    name: "苏小妍",
    age: "12",
  };
  const teacher = {
    teacherName: "高",
    teacherAge: "30",
  };

  const info = Object.assign(student, teacher);
  console.log("info==>", info);
}
demo();
/**
 * Object.defineProperty(添加属性的参数,属性名,{value:属性值})
 */
function demo1() {
  const obj = {
    name: "哈哈哈",
  };
  Object.defineProperty(obj, "test", {
    value: "47",
  });
  console.log("obj==>", obj, obj.test);
}
demo1();
