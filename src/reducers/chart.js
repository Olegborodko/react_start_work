const initialState = {
  days: [],
  clicks: 0,
  impressions: 0,
  spends: 0,
  actions: 0,
  clicks_array: [],
  impressions_array: [],
  spends_array: [],
  actions_array: [],
  cost_per_action_array: [],
  average_action_price: 0
};

export default function ssss(state=initialState, action){
  if (action.type === 'CHART_DAYS') {
    return {
      ...state,
      days: action.payload
    }
  }

  if (action.type === 'CLICKS_SUM') {
    return {
      ...state,
      clicks: action.payload
    }
  }

  if (action.type === 'IMPRESSIONS_SUM') {
    return {
      ...state,
      impressions: action.payload
    }
  }

  if (action.type === 'SPENDS_SUM') {
    return {
      ...state,
      spends: action.payload
    }
  }

  if (action.type === 'ACTIONS_SUM') {
    return {
      ...state,
      actions: action.payload
    }
  }

  if (action.type === 'CLICK_ARRAY') {
    return {
      ...state,
      clicks_array: action.payload
    }
  }

  if (action.type === 'IMPRESSIONS_ARRAY') {
    return {
      ...state,
      impressions_array: action.payload
    }
  }

  if (action.type === 'SPENDS_ARRAY') {
    return {
      ...state,
      spends_array: action.payload
    }
  }

  if (action.type === 'ACTIONS_ARRAY') {
    return {
      ...state,
      actions_array: action.payload
    }
  }

  if (action.type === 'COST_PER_ACTION_ARRAY') {
    return {
      ...state,
      cost_per_action_array: action.payload
    }
  }

  if (action.type === 'AVERAGE_ACTION_PRICE') {
    return {
      ...state,
      average_action_price: action.payload
    }
  }

  return state;
}