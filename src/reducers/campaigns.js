const initialState = [];

export default function ssss(state=initialState, action){
  if (action.type === 'CAMPAIGNS_CHANGE') {
    return action.payload;
  }

  return state;
}