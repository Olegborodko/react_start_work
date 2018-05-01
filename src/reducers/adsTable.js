const initialState = [];

export default function ssss(state=initialState, action){
  if (action.type === 'ADS_TABLE_CHANGE') {
    return action.payload;
  }
  if (action.type === 'ADS_TABLE_ADD') {
    return [
      ...state,
      action.payload
    ]
  }
  
  return state;
}