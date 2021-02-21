import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../redux/actions/index';
import ResultList from './ResultList';
const LatestResults = React.memo(({ onFetchResults, lastUpdate }) => {
  useEffect(() => {
    onFetchResults();
  }, [onFetchResults]);
  return (
    <div>
      <h2 style={{ margin: '50px 0 30px 15px' }}>
        Latest Results : <span style={{fontSize: '1rem'}}>{lastUpdate}</span>
      </h2>
      <ResultList />
    </div>
  );
});
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchResults: () => dispatch(action.fetchLatestResultStart()),
  };
};
const mapStateToProps = (state) => {
    return {
      lastUpdate: state.latest.lastUpdate,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LatestResults);
