function exercise() {
  const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];

  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  /**
   * 还可以按照以下方式声明:
   * const array1 = Array();
   * const array2 = [];
   */
  const array = new Array();
  // Declare an array with more than 5 number of elements
  console.log("fill==>", Array(5).fill("n"));
  // Find the length of your array
  console.log("length==>", countries.length);
  // Get the first item, the middle item and the last item of the array
  console.log(countries[0], countries[6], countries.length - 1);
  // 声明一个名为mixedDataTypes的数组，将不同的数据类型放入数组中并找到数组的长度。数组大小应大于5
  // Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
  let mixedDataTypes = [];
  mixedDataTypes[0] = "xxx";
  mixedDataTypes[1] = { name: "gyb" };
  mixedDataTypes[2] = { age: 12 };
  mixedDataTypes.push("n");
  mixedDataTypes.push("df");
  console.log("mixedDataTypes==>", mixedDataTypes);
  // Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  const itCompanies = new Array(
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
  );
  // Print the array using console.log()
  console.log("itCompanies==>", itCompanies);
  // Print the number of companies in the array
  console.log("");
  // Print the first company, middle and last company
  console.log(
    " Print the first company, middle and last company==>",
    itCompanies[0],
    itCompanies[itCompanies.length - 1]
  );
  // Print out each company
  console.log("Print out each company==>", itCompanies);
  // Change each company name to uppercase one by one and print them out
  console.log(
    "Change each company name to uppercase one by one and print them out==>",
    itCompanies.toString().toLocaleUpperCase()
  );
  // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  console.log(
    "Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies==>",
    itCompanies.join(),
    "are big IT companies"
  );
  // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  if (itCompanies.indexOf("Google")) {
    console.log("Google");
  }
  // Filter out companies which have more than one 'o' without the filter method
  // Sort the array using sort() method
  console.log("Sort the array using sort() method==>", itCompanies.sort());
  // Reverse the array using reverse() method
  console.log(
    "Reverse the array using reverse() method==>",
    itCompanies.reverse()
  );
  // Slice out the first 3 companies from the array

  // Slice out the last 3 companies from the array

  // Slice out the middle IT company or companies from the array

  // Remove the first IT company from the array
  console.log(itCompanies.shift());
  // Remove the middle IT company or companies from the array

  // Remove the last IT company from the array
  console.log(itCompanies.pop());
  // Remove all IT companies
  console.log(itCompanies.splice());
}
exercise();
