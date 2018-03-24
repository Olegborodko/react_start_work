const initialState = [
  '1',
  '2'
];

export default function ssss(state=initialState, action){
  if (action.type === 'ADD_ARRAY'){
    return [
      ...state,
      action.payload
    ]
  }
  if (action.type === 'DELETE_ARRAY'){
    return {
      ...state
    }
  }

  return state;
}