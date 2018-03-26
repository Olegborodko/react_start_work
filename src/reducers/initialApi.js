const initialState = {
  access: false,
  token: ''
};

export default function ssss(state=initialState, action){
  if (action.type === 'TRUE' || action.type === 'FALSE') {
    return {
      ...state,
      access: action.payload,
    };
  }
  if (action.type === 'TOKEN') {
    return {
      ...state,
      token: action.payload
    };
  }

  return state;
}