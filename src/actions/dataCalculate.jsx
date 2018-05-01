export const calculate_ctr =  function(total_impressions, total_clicks){
  if (total_impressions>0){
    return parseFloat((total_clicks / total_impressions * 100)).toFixed(2);
  }else{
    return 0;
  }
};

export const calculate_cpc =  function(total_cost, total_clicks){
  if (total_clicks>0){
    return parseFloat((total_cost / total_clicks)).toFixed(2);
  }else{
    return 0;
  }
};

export const calculate_action_rate =  function(total_actions, total_impressions){
  if (total_impressions>0){
    return parseFloat((total_actions / total_impressions * 100)).toFixed(2);
  }else{
    return 0;
  }
};

export const calculate_cost_actions =  function(total_actions, total_cost){
  if (total_actions>0){
    return parseFloat((total_cost / total_actions)).toFixed(2);
  }else{
    return 0;
  }
};