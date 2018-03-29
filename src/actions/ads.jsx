export const g_adsRequest = (g_campaigns, campaignIndex) => dispatch => {
  if (g_campaigns.length===0){
    dispatch({type: 'ADS_REQUEST_SUCCESS', payload: []});
  }else {
    var campaign_id = g_campaigns[campaignIndex].id;

    window.FB.api('/' + campaign_id + '/adsets?fields=name,start_time,end_time,daily_budget,lifetime_budget', 'get', {}, (response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        dispatch({type: 'ADS_REQUEST_SUCCESS', payload: response.data});
      }
    });
  }
};