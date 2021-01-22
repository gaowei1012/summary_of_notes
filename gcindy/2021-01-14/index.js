/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-14 09:43:07
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-14 10:44:49
 * @Description: 本章学习解构赋值
 * @Comments: 对于一个知识点的案例很充分，可以加深理解基础方法
 * @Excitation: 对于每个方法的归纳整理不够明确，不能以文字的形式说明出来、【肚子里有墨水，不能所表达】
 * 可以对每一个方法，比如：
 * let [num1, num2, ...num3] = num;
 * 这句代码，可加以说明（用文字的形式描述出来会更好）
 */

/**
 * 解构:通过解构赋值将其值从对象或者数组中取出，赋值给别的变量
 */
function demo() {
  const array = [1, 2, 3];
  // let [numberOne, numberOne1, numberOne2] = array;
  let [numberOne, numberOne1, numberOne2, numberOne3 = 4] = array;
  console.log("解构赋值1==>", numberOne, numberOne1, numberOne2); // 1 2 3
  numberOne1 = 10;
  console.log("解构赋值2==>", numberOne, numberOne1, numberOne2, numberOne3); // 1 10 3 4
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let [num1, num2, ...num3] = num;
  console.log("解构赋值3==>", num1, num2, num3); // 1 2 [3, 4, 5, 6, 7, 8, 9, 10]
  const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];
  for (const [country, city] of countries) {
    console.log(country, city);
  }

  let obj = { name: "苏小妍", age: "25", sex: "女" };
  let { name } = obj;
  console.log("name==>", name, obj.name); // 苏小妍
  console.log("obj==>", { ...obj }); // name: "苏小妍", age: "25", sex: "女"
}
demo();
