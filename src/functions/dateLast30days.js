export const dateLast30days = function(){
    var result = {};
    var today = new Date();

    result.end = format(today);

    today.setDate(today.getDate() - 30);

    result.start = format(today);

//var format = today.getTime();
//format = format - 86400; //30 days

    return result;
};

export const format = function(date){
  let yyyy = date.getFullYear().toString();
  let mm = (date.getMonth()+1).toString();
  let dd = date.getDate().toString();

  if(dd.length<2){
    dd='0'+dd;
  }

  if(mm.length<2){
    mm='0'+mm;
  }

  return yyyy + '-'+ mm +'-' + dd;
};

export default dateLast30days;