const initialState = {
  user: 0,
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

  return state;
}