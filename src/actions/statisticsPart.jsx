import dateFormat from '../functions/dateFormat';

export const zeroOrNumber = function(arg){
  if (arg){
    return arg;
  }else{
    return 0;
  }
};

export const allHash = function(data, allHashT){
  let result = allHashT;

  let actions_template = 0;
  let date_format = '';

  data.map((key, idx) => {

    date_format = dateFormat(key.date_start);
    result.clicks[date_format] = parseInt(key.clicks);
    result.impressions[date_format] = parseInt(key.impressions);
    result.spends[date_format] = parseFloat(key.spend);

    //date_start = key.date_start;

    actions_template = 0;
    if (key.actions && key.actions.length>0){
      key.actions.map((key, idx) => {
        actions_template += parseInt(key.value);
      });
    }

    result.actions[date_format] = actions_template;

  });
  return result;
};

export const arraysSet = function(date_period, allHashT, arraysSetT){
  let result = arraysSetT;
  let temp = 0;
  let temp2 = 0;

  date_period.map((key, idx) => {

    result.clicks.push(zeroOrNumber(allHashT.clicks[key]));
    result.impressions.push(zeroOrNumber(allHashT.impressions[key]));
    result.spends.push(zeroOrNumber(allHashT.spends[key]));
    result.actions.push(zeroOrNumber(allHashT.actions[key]));

    //=========
    temp = parseInt(allHashT.actions[key]);
    if (temp>0) {
      result.cost_per_action.push((parseFloat(allHashT.spends[key] / temp).toFixed(2)));
    }else{
      result.cost_per_action.push(0);
    }
    //=========
    temp = parseInt(allHashT.impressions[key]);
    if (temp>0) {
      result.countNotZero += 1;
      temp2 = allHashT.clicks[key] / temp * 100;
      result.sum_average_click_through_rate += temp2;
      result.click_through_rate.push((parseFloat(temp2).toFixed(2)));
    }else{
      result.click_through_rate.push(0);
    }
    //=========
    if (temp>0) {
      temp2 = allHashT.actions[key] / temp * 100;
      result.sum_action_rate += temp2;
      result.action_rate.push((parseFloat(temp2).toFixed(2)));
    }else{
      result.action_rate.push(0);
    }
    //=========

  });

  return result;
};

export const statisticsPart =  function(data, dispatch, date_period){
  //["Mar 23", "Mar 24", "Mar 25", "Mar 26", "Mar 27", "Mar 28", "Mar 29", "Mar 30", "Mar 31", "Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7", "Apr 8", "Apr 9", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22"]
  let clicks_sum = 0;
  let impressions_sum = 0;
  let spends_sum = 0;
  let actions_sum = 0;

  let average_action_price = 0;
  let average_click_through_rate = 0;
  let average_action_rate = 0;

  let allHashT = {
    clicks: [],
    impressions: [],
    spends: [],
    actions: []
  };
  let arraysSetT = {
    clicks: [],
    impressions: [],
    spends: [],
    actions: [],
    cost_per_action: [],
    countNotZero: 0,
    sum_average_click_through_rate: 0,
    click_through_rate: [],
    sum_action_rate: 0,
    action_rate: []
  };

  if (data && data.length>0){
    allHashT = allHash(data, allHashT);
    if (date_period && date_period.length>0){
      arraysSetT = arraysSet(date_period, allHashT, arraysSetT);
    }

    clicks_sum = arraysSetT.clicks.reduce((a, b) => a + b, 0);
    impressions_sum = arraysSetT.impressions.reduce((a, b) => a + b, 0);
    spends_sum = arraysSetT.spends.reduce((a, b) => a + b, 0);
    actions_sum = arraysSetT.actions.reduce((a, b) => a + b, 0);

    if (actions_sum>0) {
      average_action_price = (parseFloat(spends_sum / actions_sum)).toFixed(2);
    }

    if (arraysSetT.countNotZero>0) {
      average_click_through_rate = parseFloat(arraysSetT.sum_average_click_through_rate / arraysSetT.countNotZero).toFixed(2);
    }

    if (arraysSetT.countNotZero>0) {
      average_action_rate = parseFloat(arraysSetT.sum_action_rate / arraysSetT.countNotZero).toFixed(2);
    }

  }

  dispatch({type: 'CLICK_ARRAY', payload: arraysSetT.clicks});
  dispatch({type: 'IMPRESSIONS_ARRAY', payload: arraysSetT.impressions});
  dispatch({type: 'SPENDS_ARRAY', payload: arraysSetT.spends});
  dispatch({type: 'ACTIONS_ARRAY', payload: arraysSetT.actions});
  dispatch({type: 'COST_PER_ACTION_ARRAY', payload: arraysSetT.cost_per_action});
  dispatch({type: 'CLICK_THROUGH_RATE_ARRAY', payload: arraysSetT.click_through_rate});
  dispatch({type: 'ACTION_RATE_ARRAY', payload: arraysSetT.action_rate});

  dispatch({type: 'CLICKS_SUM', payload: clicks_sum});
  dispatch({type: 'IMPRESSIONS_SUM', payload: impressions_sum});
  dispatch({type: 'SPENDS_SUM', payload: spends_sum});
  dispatch({type: 'ACTIONS_SUM', payload: actions_sum});

  dispatch({type: 'AVERAGE_ACTION_PRICE', payload:average_action_price});
  dispatch({type: 'AVERAGE_CLICK_THROUGH_RATE', payload:average_click_through_rate});
  dispatch({type: 'AVERAGE_ACTION_RATE', payload:average_action_rate});

};

export default statisticsPart;