import dateLast30days from '../functions/dateLast30days';
import adsTablePart from './adsTablePart.jsx';


export const g_adsTable = (g_adverts) => dispatch => {
  dispatch({type: 'ADS_TABLE_CHANGE', payload: []});
  
  if (g_adverts.length===0){
    return;
  }
  
  var date_step = dateLast30days();
  g_adverts.map((key, idx) => {
    if (key && key.id){
      f_request(key.id, key.name, date_step);
    }
  });
  
  function f_request(id, name, date_step) {
    window.FB.api('/' + id + "/insights?fields=spend,impressions,clicks,actions&time_range={'since':'"+date_step.start+"','until':'"+date_step.end+"'}&time_increment=1", 'get', {}, (response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        if (response && response.data) {
            if (response.data.length>0){
              adsTablePart(response.data, name, dispatch);
            }
        }
      }
    });
  }
  
  
}