import * as actionTypes from './actionTypes';
import axios from 'axios';
export const fetchLatestResultStart = () => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/totals',
      headers: {
        'x-rapidapi-key': '14f13eef1bmshbb8ed92c27c1b82p144eb7jsnb0ca4f81a223',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data[0]);
        dispatch(fetchLatestResultSuccess(response.data[0]));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(fetchLatestResultFail(error));
      });
    
   
  };
};

export const fetchLatestResultSuccess = (data) => {
  return {
    type: actionTypes.FETCH_LATEST_RESULT_SUCCESS,
    payload: data
  };
};
export const fetchLatestResultFail = (error) => {
  return {
    type: actionTypes.FETCH_LATEST_RESULT_FAIL,
    error,
  };
};
