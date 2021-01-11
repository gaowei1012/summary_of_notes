function demo() {
  /**
   * 类型: string、number、null、undefined、Boolean、object
   * 检验类型: typeof()
   * 定义变量: let、const、var
   * 字符串大写: str.toUpperCase()
   * 字符串小写: str.toLowerCase()
   * 截取字符串: str.substr(startIndex,length) ==> 包含头不包含尾（返回从指定下标开始的长度为length的字符，可以为负数）
   * 截取字符串: str.substring(startIndex,endIndex) ==> 只截取startIndex ~ endIndex的值（回指定下标间的字符，下标必须为正整数）
   * 截取字符串: str.slice(startIndex,endIndex) ==> 只截取startIndex ~ endIndex的值（返回指定下标间的字符，可以为负数）
   * 去除空格: str.trim()
   * 判断是否包含某个字符: str.includes(xxx) ==> 有为true，没有为false
   * 替换某一节字符串: str.replace(oldStr,newStr)
   * 根据索引获取字符串: str.charAt(xxx) ==> xxx必须为正数
   * ?根据字符串获取索引: str.indexOf(xx) ==> xx为字符串,获取字符串第一个xx
   * 根据字符串获取索引: str.lastIndexOf(xx) ==> xx为字符串,获取字符串最后一个xx
   * ?根据字符串获取索引: str.search() ==> 返回第一个匹配项的索引，搜索值可以是字符串或正则表达式模式。（和indexOf的区别）
   * 在原字符串的末尾添加字符串: str.concat(xx1,xx2...)
   * 判断字符串的开头: str.startsWith(xx) ==> 正确为true，错误为false
   * 判断字符串的结尾: str.endsWith(xx) ==> 正确为true，错误为false
   * 重复字符串:str.repeat(xx) ==> 可以理解为将str赋值黏贴xx个
   * 转浮点: parseFloat(str)
   * 转数字: Number(str) / parseInt(str)
   */

  let str = " admin ";
  const str1 = "sadsasda ";
  const str2 = "hello word peace and love";
  console.log("toUpperCase==>", str.toUpperCase()); // ADMIN
  console.log("toUpperCase==>", str.toLowerCase()); // admin
  console.log("substr==>", str.substr(0)); // admin
  console.log("substring==>", str.substring(0, 3)); // adm
  console.log("slice==>", str.slice(0, 5)); // admi
  console.log("trim==>", str.trim()); // admin
  console.log("includes==>", str.includes("h")); // false
  console.log("replace==>", str.replace("a", "b")); // bdmin
  console.log("charAt==>", str.charAt(5)); // n
  console.log("indexOf==>", str.indexOf("a")); // 1
  console.log("lastIndexOf==>", str1.lastIndexOf("a")); // 7
  console.log("search==>", str1.search("a")); // 1
  console.log("concat==>", str.concat("gyb", "hhh")); // admin gybhhh
  console.log("startsWith==>", str.startsWith("gyb")); // false
  console.log("endsWith==>", str2.endsWith("e")); // true
  console.log("repeat==>", str.repeat("3")); // admin  admin  admin
  str = "2121";
  console.log("parseFloat==>", parseFloat(str)); // 2121
  console.log("Number==>", Number(str)); // 2121
  console.log("parseInt==>", parseInt(str)); // 2121
}
demo();
