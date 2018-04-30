import { g_adsRequest } from './ads';

export const g_campaignsRequest = (g_users, userIndex, campaignIndex, adIndex) => dispatch => {
  if (g_users.length===0){
    return;
  }
  var ad_account_id = g_users[userIndex].id;

  //fields=name,objective
  window.FB.api('/'+ad_account_id+'/campaigns?fields=name', 'get', {}, (response) => {
    if (response.error) {
      console.log(response.error)
    }else{
      dispatch({ type: 'CAMPAIGNS_REQUEST_SUCCESS', payload: response.data });
      dispatch(g_adsRequest(response.data, campaignIndex, adIndex));
    }
  });
};