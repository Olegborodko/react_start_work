//import { g_advertRequest } from './advert';
import {dateStep} from '../functions/dateStep';

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

      window.FB.api('/' + id + '/insights?fields=spend,impressions,clicks,actions', 'get', {}, (response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          //dispatch({type: 'ADS_REQUEST_SUCCESS', payload: response.data});
          if (response.data) {
            console.log(response.data);
            if (response.data[0]) {
              let data_cache = response.data[0];
              if (data_cache['spend']) {
                dispatch({type: 'STATISTICS_SPEND', payload: data_cache['spend']});
              }
              if (data_cache['date_start']) {
                dispatch({type: 'STATISTICS_DATE_START', payload: data_cache['date_start']});
              }
              if (data_cache['date_stop']) {
                dispatch({type: 'STATISTICS_DATE_STOP', payload: data_cache['date_stop']});
              }
              if (data_cache['impressions']) {
                dispatch({type: 'STATISTICS_IMPRESSIONS', payload:  data_cache['impressions']});
              }
              if (data_cache['clicks']) {
                dispatch({type: 'STATISTICS_CLICKS', payload:  data_cache['clicks']});
              }
              if (data_cache['actions']) {
                dispatch({type: 'STATISTICS_ACTIONS', payload:  data_cache['actions']});
              }
              //var s = dateStep("2018-03-20","2018-04-18");
              if (data_cache['date_start'] && data_cache['date_stop']) {
                dispatch({type: 'CHART_DAYS', payload:  dateStep(data_cache['date_start'], data_cache['date_stop'])});
                //dispatch({type: 'STATISTICS_ACTIONS', payload:  data_cache['actions']});
              }
            } else {
              dispatch({type: 'STATISTICS_SPEND', payload: ''});
              dispatch({type: 'STATISTICS_DATE_START', payload: ''});
              dispatch({type: 'STATISTICS_DATE_STOP', payload: ''});
              dispatch({type: 'STATISTICS_IMPRESSIONS', payload: ''});
              dispatch({type: 'STATISTICS_CLICKS', payload: ''});
              dispatch({type: 'STATISTICS_ACTIONS', payload:  ''});
              dispatch({type: 'CHART_DAYS', payload:  []});
            }
          }
        }
      });

    }
  }
};