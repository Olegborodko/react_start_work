import { calculate_ctr, calculate_cpc,
  calculate_action_rate, calculate_cost_actions } from './dataCalculate.jsx';

export const adsTablePart =  function(data, name, dispatch){
  //{spend: "5.2", impressions: "257", clicks: "2", actions: Array(5), date_start: "2018-04-18", …}
  let result = {
    name: name,
    spend: 0,
    impressions: 0,
    clicks: 0,
    actions: 0,
    
    ctr: 0,
    cpc: 0,
    act_rate: 0,
    cost_act: 0
  };
  
  data.map((key, idx) => {
    if (key){
      result.spend += parseFloat(key.spend);
      result.impressions += parseInt(key.impressions);
      result.clicks += parseInt(key.clicks);
  
      if (key.actions && key.actions.length>0){
        key.actions.map((key, idx) => {
          result.actions += parseInt(key.value);
        });
      }
    }
  });
  
  result.ctr = calculate_ctr(result.impressions, result.clicks);
  result.act_rate = calculate_action_rate(result.actions, result.impressions);
  result.cpc = calculate_cpc(result.spend, result.clicks);
  result.cost_act = calculate_cost_actions(result.actions, result.spend);
  
  result.spend = (result.spend).toFixed(2);
  
  dispatch({type: 'ADS_TABLE_ADD', payload: result});
};

export default adsTablePart;