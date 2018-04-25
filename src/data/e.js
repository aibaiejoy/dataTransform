const checkTextArea = ({ text }) => {
  const reg = /\b\d+(?:([a-zA-Z0-9]+)\s+(.*))+\b/g;
  let ary = [];
  text.replace(reg, (...arg) => {
    console.log(arg);
    let obj = {};
    obj.n = arg[1];
    obj.m = arg[2];
    ary.push(obj);
  });
  // console.log(ary);
};

var text = "k1 v1 \n k2 v2 \n k3 v3 ";

checkTextArea({ text });

var re = /quick\s(brown).+?(jumps)/gi;
var result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
// console.log(result.index, result.input)

var myRe = /ab*/g;
var str = "abbcdefabh";
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = "Found " + myArray[0] + ". ";
  msg += "Next match starts at " + myRe.lastIndex;
  // console.log(msg);
}
// console.log(myRe.test(str), myRe.lastIndex)
// console.log(myRe.test(str), myRe.lastIndex)
// console.log(myRe.test(str), myRe.lastIndex)

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  console.log(match, p1, p2, p3, offset);
  return [p1, p2, p3].join(" - ");
}
var newString = text.replace(/\b\d+(([a-zA-Z0-9]+)\s+(.*))+\b/g, replacer);
// console.log(newString); // abc - 12345 - #$*%
