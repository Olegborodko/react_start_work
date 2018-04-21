const initialState = [];

export default function ssss(state=initialState, action){
  if (action.type === 'STATISTICS_CHANGE') {
    return action.payload;
  }

  return state;
}