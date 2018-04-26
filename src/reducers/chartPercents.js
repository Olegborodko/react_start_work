const initialState = {
  clicks: ['0%',''],
  impressions: ['0%',''],
  spends: ['0%',''],
  actions: ['0%',''],
  cost_per_action: ['0%',''],
  click_through_rate:['0%',''],
  action_rate: ['0%','']
};

export default function ssss(state=initialState, action){
  if (action.type === 'PERCENT_CLICKS') {
    return {
      ...state,
      clicks: action.payload
    }
  }
  
  if (action.type === 'PERCENT_IMPRESSIONS') {
    return {
      ...state,
      impressions: action.payload
    }
  }
  
  if (action.type === 'PERCENT_SPENDS') {
    return {
      ...state,
      spends: action.payload
    }
  }
  
  if (action.type === 'PERCENT_ACTIONS') {
    return {
      ...state,
      actions: action.payload
    }
  }
  
  if (action.type === 'PERCENT_COST_PER_ACTION') {
    return {
      ...state,
      cost_per_action: action.payload
    }
  }
  
  if (action.type === 'PERCENT_CLICK_THROUGH_RATE') {
    return {
      ...state,
      click_through_rate: action.payload
    }
  }
  
  if (action.type === 'PERCENT_ACTION_RATE') {
    return {
      ...state,
      action_rate: action.payload
    }
  }
  
  return state;
}