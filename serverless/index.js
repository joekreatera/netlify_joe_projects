const DateUtil = require('../dateutil');

function getDate(){
  var today = DateUtil.date();
  return DateUtil.format(today , "F d, Y");
}


exports.handler = function(event, context, callback) {

  var response = "-";

  if(event.path == "/today"){
      response = getDate();
  }

  callback(null, {
    statusCode: 200,
    body: response
  });
};
