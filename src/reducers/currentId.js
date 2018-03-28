const initialState = {
  user: 0
};

export default function ssss(state=initialState, action){
  if (action.type === 'CURRENT_USER_CHANGE') {
    return {
      ...state,
      user: action.payload
    }
  }

  return state;
}