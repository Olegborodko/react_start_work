const initialState = [];

export default function ssss(state=initialState, action){
  if (action.type === 'URL_HISTORY_ADD') {
    if (state.length>3) {
      state.shift();
    }
    return [
      ...state,
      action.payload
    ]
  }

  return state;
}