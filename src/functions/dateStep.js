export const dateStep = function(startDate, endDate){
  //console.log(typeof s)
  let startDate1 = new Date(startDate);
  let endDate1 = new Date(endDate);
  let months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  var dates = [],
  currentDate = startDate1,
  addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  while (currentDate <= endDate1) {
    // year = currentDate.getFullYear();
    // month = currentDate.getMonth();
    // day = currentDate.getDate();
    dates.push(months_arr[currentDate.getMonth()]+" "+currentDate.getDate());
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
}

//export default sanitizer;