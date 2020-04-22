const DateUtil = require('dateutil');

function getDate(){
  var today = DateUtil.date();
  return DateUtil.format(today , "F d, Y");
}


exports.handler = function(event, context, callback) {

  var response = "-";
  console.log(event.path);
  if( (""+event.path).indexOf( "/today" ) != -1){
      response = getDate();
  }

  callback(null, {
    statusCode: 200,
    body: response
  });
};
