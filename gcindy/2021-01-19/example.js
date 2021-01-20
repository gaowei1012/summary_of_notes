/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-19 10:50:27
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-19 21:45:38
 * @Description: 栗子🌰
 * @Comments: 
 * @Excitation: 
 */
function Student(props) {
  this.name = props.name || "Unnamed";
}

// var s = new Student({
//     name: 'xxxx'
// })
// console.log('s', s.name)

// PrimaryStudent构造函数:
function PrimaryStudent(props) {
  Student.call(this, props);
  this.grade = props.grade || 1;
}

var s = new PrimaryStudent({
  name: "xxxx",
});
// console.log('s', s.grade)

// 空函数F:
function F() {}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
  return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
  name: "小明",
  grade: 2,
});
xiaoming.name; // '小明'
// console.log(xiaoming.grade); // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true

function A(name, age) {
  this.name = name;
  this.age = age;
}

function B(gender, name, age) {
  A.call(this, name, age);
  this.gender = gender;
}

const a = new A("aaa", "sss");
const b = new B("男");

// a.name 属于 A 构造函数中的属性

// console.log('a', a.name)
// console.log('b', b.gender)
