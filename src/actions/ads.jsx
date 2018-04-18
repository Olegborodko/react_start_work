import { g_advertRequest } from './advert';

export const g_adsRequest = (g_campaigns, campaignIndex, adIndex) => dispatch => {
  if (g_campaigns.length===0){
    dispatch({type: 'ADS_REQUEST_SUCCESS', payload: []});
    dispatch({type: 'ADVERTS_CHANGE', payload: []});
  }else {
    var campaign_id = g_campaigns[campaignIndex].id;

    //fields=name,start_time,end_time,daily_budget,lifetime_budget
    window.FB.api('/' + campaign_id + '/adsets?fields=name', 'get', {}, (response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        dispatch({type: 'ADS_REQUEST_SUCCESS', payload: response.data});
        //console.log(response.data[0]['id']);
        dispatch(g_advertRequest(response.data, adIndex));
      }
    });
  }
};