const initialState = {
  user: 0,
  campaign: 0,
  ads: 0,
  ad: 0,
  token: '',
  email: ''
};

export default function ssss(state=initialState, action){
  if (action.type === 'CURRENT_USER_CHANGE') {
    return {
      ...state,
      user: action.payload
    }
  }
  if (action.type === 'CURRENT_TOKEN_CHANGE') {
    return {
      ...state,
      token: action.payload
    }
  }
  if (action.type === 'CURRENT_EMAIL_CHANGE') {
    return {
      ...state,
      email: action.payload
    }
  }
  if (action.type === 'CURRENT_CAMPAIGN_CHANGE') {
    return {
      ...state,
      campaign: action.payload
    }
  }
  if (action.type === 'CURRENT_ADS_CHANGE') {
    return {
      ...state,
      ads: action.payload
    }
  }
  if (action.type === 'CURRENT_AD_CHANGE') {
    return {
      ...state,
      ad: action.payload
    }
  }

  return state;
}