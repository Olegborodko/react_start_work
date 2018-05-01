//import { g_advertRequest } from './advert';
import {dateStep} from '../functions/dateStep';
import dateLast30days from '../functions/dateLast30days';
import dateFormat from '../functions/dateFormat';
import statisticsPart from './statisticsPart.jsx';

export const g_Statistics = (g_set, index) => dispatch => {
  if (g_set.length===0){
    return;
    //dispatch({type: 'ADS_REQUEST_SUCCESS', payload: []});
    //dispatch({type: 'ADVERTS_CHANGE', payload: []});
  }else {
    var id = g_set[index];
    if (id && id.id) {
      id = id.id;
      console.log(id);
      var date_step = dateLast30days();

      window.FB.api('/' + id + "/insights?fields=spend,impressions,clicks,actions&time_range={'since':'"+date_step.start+"','until':'"+date_step.end+"'}&time_increment=1", 'get', {}, (response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          if (response) {
            if (response.data) {
              //console.log(response.data);

              let date_period = dateStep(date_step.start, date_step.end);
              dispatch({type: 'CHART_DAYS', payload: date_period});

              //console.log(dateFormat(date_step.end));
              //console.log(response.data);

              statisticsPart(response.data, dispatch, date_period);
            }
          }

        }
        dispatch({ type: 'PRELOADER_FALSE' });
      });

    }
  }
};