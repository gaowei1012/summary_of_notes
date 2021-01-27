/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-26 10:19:23
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-26 11:01:20
 * @Description: 了解async以及Generator函数
 * @Comments: 案例表达明确，可以突出对知识点的理解，保持这样的做法，再接再厉
 * @Excitation: 今天的案例对知识点陈述很明确，在实际应用中可以使用这种方式处理异步逻辑
 */

/**
 * Generator函数
 * 1、基本用法
 * 2、调用 next 才会遍历下一个内部状态
 * 3、yield 表达式
 */
function* Hello() {
  yield "hello"; // yield表达式
  yield "小高";
  return "ending";
}
const hello = Hello();
console.log(hello.next()); // { value: 'hello', done: false }
console.log(hello.next()); // { value: '小高', done: false }
console.log(hello.next()); // { value: 'ending', done: true }
/**
 * async
 * 1、基本用法
 * 2、async 内部返回的什么 ==> Promise对象
 * 3、await 使用
 */
async function Demo() {
  const result = await (3 * 10);
  console.log("result==>", result); // 30
}
Demo();
