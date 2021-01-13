/**
 * array.filter((参数)=>过滤条件): 过滤某些数据
 * ?array.reduce((累计值,当前值，当前索引,原数组)=>过滤条件): 对数据进行运算处理
 * array.every(参数)=>条件: 判断该数值中的每个元素是否都能通过测试 ==> 每个元素都通过返回true,反之会当做false
 * array.find((参数)=>条件):寻找合适条件的元素并返回
 * array.findIndex((参数)=>条件): 返回满足条件的第一个元素的位置
 * array.some((元素)=>条件): 判断是否至少有一个预算元素符合条件 ==> 通过返回true,反之会当做false
 * ?array.sort((元素)=>{条件}): 默认对字符串根据26个英文字母进行升序排序，对数字进行1-100升序排序
 */
function demo() {
  const array = ["1", "2", "3"];
  const webTechs = [
    "Redux",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDB",
    "Node",
  ];
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
demo();
