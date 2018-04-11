import { g_adsRequest } from './ads';

export const g_campaignsRequest = (g_users, userIndex, campaignIndex) => dispatch => {
  var ad_account_id = g_users[userIndex].id;

  window.FB.api('/'+ad_account_id+'/campaigns?fields=name,objective', 'get', {}, (response) => {
    if (response.error) {
      console.log(response.error)
    }else{
      dispatch({ type: 'CAMPAIGNS_REQUEST_SUCCESS', payload: response.data });
      dispatch(g_adsRequest(response.data, campaignIndex));
    }
  });
};