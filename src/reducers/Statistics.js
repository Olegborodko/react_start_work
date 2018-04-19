const initialState = {
  spend: '',
  date_start: '',
  date_stop: '',
  impressions: '',
  clicks: '',
  actions: []
};

export default function ssss(state=initialState, action){
  if (action.type === 'STATISTICS_SPEND') {
    return {
      ...state,
      spend: action.payload
    }
  }
  if (action.type === 'STATISTICS_DATE_START') {
    return {
      ...state,
      date_start: action.payload
    }
  }
  if (action.type === 'STATISTICS_DATE_STOP') {
    return {
      ...state,
      date_stop: action.payload
    }
  }
  if (action.type === 'STATISTICS_IMPRESSIONS') {
    return {
      ...state,
      impressions: action.payload
    }
  }
  if (action.type === 'STATISTICS_CLICKS') {
    return {
      ...state,
      clicks: action.payload
    }
  }
  if (action.type === 'STATISTICS_ACTIONS') {
    return {
      ...state,
      actions: action.payload
    }
  }

  return state;
}