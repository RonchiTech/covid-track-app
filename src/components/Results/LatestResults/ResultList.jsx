import React from 'react';
import Card from '../../Cards/Cards';
import { connect } from 'react-redux';
const resultList = ({ confirmed, recovered, critical, deaths }) => {
  console.log(confirmed);
  return (
    <section style={{textAlign: 'center', margin: '25px 0'}}>
      <Card name="Confirmed" value={confirmed} />
      <Card name="Recovered" value={recovered} />
      <Card name="Critical" value={critical} />
      <Card name="Deaths" value={deaths} />
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    confirmed: state.latest.confirmed,
    recovered: state.latest.recovered,
    critical: state.latest.critical,
    deaths: state.latest.deaths,
  };
};
export default connect(mapStateToProps)(resultList);
