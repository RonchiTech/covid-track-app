import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import { fetchLatestResultFail } from './LatestResultsActions';

export const fetchResultStart = (country) => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/country',
      params: { name: country },
      headers: {
        'x-rapidapi-key': '14f13eef1bmshbb8ed92c27c1b82p144eb7jsnb0ca4f81a223',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data[0]);
        dispatch(fetchResultSuccess(response.data[0]));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(fetchLatestResultFail(error))
      });
  };
};
export const fetchResultSuccess = (data) => {
  return  {
      type: actionTypes.FETCH_SEARCH_SUCCESS,
      payload: data
  };
};
export const fetchResultFail = (error) => {
  return {
      type: actionTypes.FETCH_LATEST_RESULT_FAIL,
      error
  };
};
