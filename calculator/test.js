import "./converter.js"
const ConvertHandler = require('converter');
let convert = new ConvertHandler();
convert.getUnit("cup");
convert.getNum(2);
console.log(convert.convert(2,"cup"))