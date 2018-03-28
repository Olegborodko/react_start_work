const initialState = [];

export default function ssss(state=initialState, action){
  if (action.type === 'CAMPAIGNS_REQUEST_SUCCESS') {
    return action.payload;
  }

  return state;
}