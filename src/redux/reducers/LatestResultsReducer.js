
import * as actionTypes from '../actions/actionTypes'
const initialState = {
  confirmed: 0,
  recovered: 0,
  critical: 0,
  deaths: 0,
  lastUpdate: null,
  error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_LATEST_RESULT_SUCCESS:
        return {
          ...state,
          confirmed: action.payload.confirmed,
          recovered: action.payload.recovered,
          critical: action.payload.critical,
          deaths: action.payload.deaths,
          lastUpdate: action.payload.lastUpdate
        };
      case actionTypes.FETCH_LATEST_RESULT_FAIL:
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
};
export default reducer;