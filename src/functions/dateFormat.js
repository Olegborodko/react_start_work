export const dateFormat = function(date){
  let months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let Date1 = new Date(date);


  return months_arr[Date1.getMonth()]+" "+Date1.getDate();
};

export default dateFormat;