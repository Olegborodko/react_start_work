const initialState = {
  users: false
};

export default function ssss(state=initialState, action){
  if (action.type === 'USERS_REQUEST') {
    return {
      users: action.payload
    }
  }

  return state;
}