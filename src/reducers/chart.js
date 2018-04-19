const initialState = {
  days: []
};

export default function ssss(state=initialState, action){
  if (action.type === 'CHART_DAYS') {
    return {
      ...state,
      days: action.payload
    }
  }

  return state;
}