export const g_advertRequest = (g_ads, adIndex) => dispatch => {
  if (g_ads.length===0){
    dispatch({type: 'ADVERTS_CHANGE', payload: []});
  }else {
    let inx = g_ads[adIndex];
    if (inx && inx.id) {
      window.FB.api('/' + inx.id + '/ads?fields=name,configured_status,effective_status,creative', 'get', {}, (response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          dispatch({type: 'ADVERTS_CHANGE', payload: response.data});
        }
      });
    }
    else{
      dispatch({type: 'ADVERTS_CHANGE', payload: []});
    }
  }
};