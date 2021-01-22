/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-18 10:02:25
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-19 10:41:29
 * @Description: 小练习
 * @Comments: 多写业务，加深基础的巩固
 * @Excitation: 可以在案例上写你这断代码的思路，可以以注释的形式展现出来，这样可以表明你对代码的理解程度（具体思路更重要）
 */

const data = [
  {
    app_name: "test",
    app_id: "1221",
    data_structure: [{ attr_key: "xxx", attr_value: "男" }],
  },
  {
    app_name: "test",
    app_id: "1221",
    data_structure: [{ attr_key: "xxx", attr_value: "女" }],
  },
];

function demo() {
  const info = {
    username: "主治医师-王医生",
    id_number: "01-221",
    age: 37,
    gender: "男",
    hospital: "上海协和医院",
    medicine: "999感冒灵颗粒",
    quantity: 14,
    price: 12.8,
    doctor: "王医生",
    insurance_number: "0900099-11323",
    insurance_coverage: "医院个人身保险",
  };
  const array = [];
  const newArr = [];
  // 方法一
  array.push({
    app_name: "test",
    app_id: "1221",
    data_structure: [
      {
        username: Object.entries(info)[0][1],
        gender: Object.entries(info)[4][1],
      },
    ],
  });
  console.log("array==>", array);
  // 方法二
  for (const i in data) {
    const arr = {}; // 取值data中的data_structure
    const structure = data[i].data_structure;
    // 循环 data_structure
    for (const i in structure) {
      arr[structure[i].attr_key] = info[structure[i].attr_key]; // 如info中的attr_key和structure中的attr_key匹配相等，赋值给左边的arr
      const temp1 = {
        username: structure[i].attr_key,
        gender: structure[i].attr_value,
      };
      newArr.push(temp1);
    }
  }
  console.log("newArr==>", newArr);
}
demo();
