/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-01-13 08:15:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-01-13 11:57:29
 * @Description: 学习高阶函数、SET、MAP
 * @Comments: 对基础方法整理比较到位，每个方法的用法书写比较详细、适合对基础的语法归纳，但是缺少实际demo为参考(demo缺少实际业务逻辑)，可以结合一些实际的逻辑展开更好(最好参照实际面试题)
 * @Excitation: 整理很到位，望学以致用、把这个些用到实际工作中，再接再厉，加油💪
 */

/**
 * 高阶函数:
 * array.filter((参数)=>过滤条件): 过滤某些数据
 * ?array.reduce((累计值,当前值，当前索引,原数组)=>过滤条件): 对数据进行运算处理
 * array.every(参数)=>条件: 判断该数值中的每个元素是否都能通过测试 ==> 每个元素都通过返回true,反之会当做false
 * array.find((参数)=>条件):寻找合适条件的元素并返回
 * array.findIndex((参数)=>条件): 返回满足条件的第一个元素的位置
 * array.some((元素)=>条件): 判断是否至少有一个预算元素符合条件 ==> 通过返回true,反之会当做false
 * ?array.sort((元素)=>{条件}): 默认对字符串根据26个英文字母进行升序排序，对数字进行1-100升序排序
 */
let webTechs = [
  "Redux",
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "MongoDB",
  "Node",
];
function demo() {
  const array = ["1", "2", "3"];
  const filter = webTechs.filter((e) => e.includes("a")); //['JavaScript','React']
  console.log("filter==>", filter);
  /**
   *
   * @param {*} acc 累计值
   * @param {*} cur 当前值，当前索引
   *
   * todo:const reducer = (acc, cur) => {} 和 const reduces = (acc, index) => acc * cur;的的区别
   * const reducer = (acc, cur) => {}需要return;const reduces = (acc, cur) => acc * cur不需要return
   */
  const reducer = (acc, cur) => {
    return acc * cur;
  };
  console.log("reduce==>", array.reduce(reducer, 5)); // 30 ? 这个5*6怎么算的
  array[3] = "11";
  const every = array.every((e) => e < 10);
  console.log("every==>", every); // false
  const find = array.find((e) => e > 10);
  console.log("find==>", find); // 11
  const findIndex = webTechs.findIndex((e) => e.length > 7);
  console.log("findIndex==>", findIndex); // 2
  const some = array.some((e) => e * 5 < 10);
  console.log("some==>", some); // true

  const sorts = array.sort(function (a, b) {
    console.log("a==>", a);
    console.log("b==>", b);
    if (a < b) {
      console.log("a1==>", a);
      console.log("b1==>", b);
      return -1;
    }
    if (a > b) {
      console.log("a2==>", a);
      console.log("b2==>", b);
      return 1;
    }
    console.log("a3==>", a);
    console.log("b3==>", b);
    return 0;
  });

  console.log("sort==>", sorts); // ["1", "11", "2", "3"]
}
// demo();

/**
 * set(值):
 * 去重:new Set(数组)
 * 查看长度: xxx.size
 * 向set添加数据: new Set().add(xxx)
 * 删除set中的某个数组:new Set().delete(xxx)
 * 清空set中的数据:new Set().clear()
 * 判断set中是否包含某个数据:new Set().has(xxx) ==> 有返回true,反之false
 * 合并多个set: new Set([...a,...b])
 * 通过过滤找到重复数据:a.filter((num) => B.has(num))
 * 通过过滤找到未重复数据:a.filter((num) => !B.has(num))
 */
function demo1() {
  webTechs = [
    "Redux",
    "Redux",
    "vue",
    "React",
    "HTML",
    "HTML",
    "CSS",
    "JavaScript",
    "Google",
  ];
  let deduplication = new Set(webTechs.sort());
  console.log("deduplication==>", deduplication); // {"CSS", "HTML", "JavaScript", "React", "Redux","vue"}
  console.log("deduplication==size==>", deduplication.size); // 6
  const companies = new Set();
  companies.add("Google");
  companies.add("facebook");
  companies.add("baidu");
  companies.add("Microsoft");
  companies.add("Oracle");
  companies.add("vue");
  console.log("add==>", companies); // "Google", "facebook", "baidu", "Microsoft", "Oracle"
  companies.delete("baidu");
  console.log("delete==>", companies); // "Google", "facebook", "Microsoft", "Oracle"
  console.log("has==>", companies.has("Google")); // true
  // companies.clear();
  // console.log("clear==>", companies); // {}
  // console.log("合并==>", new Set([...webTechs, ...companies])); // {"CSS", "HTML", "JavaScript", "React", "Redux","vue","Google","facebook","Microsoft","Oracle"}
  // todo:思路==>首先去过滤webTechs在过滤webTechs的时候去判断companies中是否含有webTechs的值，若有就返回
  const same = new Set(webTechs.filter((num) => companies.has(num)));
  console.log("找到重复数据==>", same); // {"Google", "vue"}
  const different = new Set(webTechs.filter((num) => !companies.has(num)));
  console.log("找到不同的数据==>", different); // "CSS", "HTML", "JavaScript", "React", "Redux
}
// demo1();
/**
 * map(键,值):
 * 添加数据: new Map().set(键,值)
 * 获取某个键的值: new Map().get(键)
 * 判断是否包含某个键: new Map().has(键)
 */

function demo2() {
  const add = new Map();
  add.set("name", "龚铱白");
  add.set("age", 12);
  add.set("sex", "女");
  console.log("添加数据==>", add); // {"name" => "龚铱白", "age" => 12, "sex" => "女"}
  console.log("获取名字==>", add.get("name")); // 龚铱白
  console.log("判断是否包含某个键==>", add.has("name")); // true
  const array = [];
  for (const key of add) {
    console.log("key==>", key);
    array.push({
      key: key[0],
      value: key[1],
    });
  }
  console.log("array==>", array);
}
demo2();
