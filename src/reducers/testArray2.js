const initialState = [
  '3',
  '4'
];

export default function ssss(state=initialState, action){
  if (action.type === 'ADD_ARRAY2'){
    return [
      ...state,
      action.payload
    ]
  }
  if (action.type === 'DELETE_ARRAY2'){
    return {
      ...state
    }
  }

  return state;
}