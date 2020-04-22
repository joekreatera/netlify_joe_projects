var DateUtil = require('dateutil');

var today = DateUtil.date();
var str = DateUtil.format(today , "F d, Y")
console.log(str);
