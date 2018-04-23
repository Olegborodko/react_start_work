import dateFormat from '../functions/dateFormat';

export const zeroOrNumber = function(arg){
  if (arg){
    return arg;
  }else{
    return 0;
  }
};

export const statisticsPart =  function(data, dispatch, date_period){
  //["Mar 23", "Mar 24", "Mar 25", "Mar 26", "Mar 27", "Mar 28", "Mar 29", "Mar 30", "Mar 31", "Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7", "Apr 8", "Apr 9", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22"]
  let clicks_sum = 0;
  let impressions_sum = 0;
  let spends_sum = 0;
  let actions_sum = 0;

  let clicks_array = [];
  let impressions_array = [];
  let spends_array = [];
  let actions_array = [];

  let clicks_hash = {};
  let impressions_hash = {};
  let spends_hash = {};
  let actions_hash = {};

  let date_start = '';
  let date_format = '';
  let actions_template = 0;

  if (data && data.length>0){
    data.map((key, idx) => {

      date_format = dateFormat(key.date_start);

      clicks_hash[date_format] = parseInt(key.clicks);
      impressions_hash[date_format] = parseInt(key.impressions);
      spends_hash[date_format] = parseFloat(key.spend);

      date_start = key.date_start;

      actions_template = 0;
      if (key.actions && key.actions.length>0){
        key.actions.map((key, idx) => {
          actions_template += parseInt(key.value);
        });
      }

      actions_hash[date_format] = actions_template;

    });

    if (date_period && date_period.length>0){
      date_period.map((key, idx) => {

        clicks_array.push(zeroOrNumber(clicks_hash[key]));
        impressions_array.push(zeroOrNumber(impressions_hash[key]));
        spends_array.push(zeroOrNumber(spends_hash[key]));
        actions_array.push(zeroOrNumber(actions_hash[key]));

      });
    }

    clicks_sum = clicks_array.reduce((a, b) => a + b, 0);
    impressions_sum = impressions_array.reduce((a, b) => a + b, 0);
    spends_sum = spends_array.reduce((a, b) => a + b, 0);
    actions_sum = actions_array.reduce((a, b) => a + b, 0);

  }

  dispatch({type: 'CLICK_ARRAY', payload: clicks_array});
  dispatch({type: 'IMPRESSIONS_ARRAY', payload: impressions_array});
  dispatch({type: 'SPENDS_ARRAY', payload: spends_array});
  dispatch({type: 'ACTIONS_ARRAY', payload: actions_array});

  dispatch({type: 'CLICKS_SUM', payload: clicks_sum});
  dispatch({type: 'IMPRESSIONS_SUM', payload: impressions_sum});
  dispatch({type: 'SPENDS_SUM', payload: spends_sum});
  dispatch({type: 'ACTIONS_SUM', payload: actions_sum});

};

export default statisticsPart;