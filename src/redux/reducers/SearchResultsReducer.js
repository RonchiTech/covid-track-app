import * as actionTypes from '../actions/actionTypes';
const initialState = {
  confirmed: 0,
  recovered: 0,
  critical: 0,
  deaths: 0,
  lastUpdate: null,
  error: null,
  code: null,
  country: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        confirmed: action.payload.confirmed,
        recovered: action.payload.recovered,
        critical: action.payload.critical,
        deaths: action.payload.deaths,
        lastUpdate: action.payload.lastUpdate,
        code: action.payload.code,
        country: action.payload.country,
        error: null
      };
    case actionTypes.FETCH_LATEST_RESULT_FAIL:
      return {
        ...state,
        error: 'error occured',
      };
    default:
      return state;
  }
};
export default reducer;
