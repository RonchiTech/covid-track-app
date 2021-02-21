import React from 'react';
import Card from '../../Cards/Cards';
import { connect } from 'react-redux';
const searchedList = ({
  confirmed,
  recovered,
  critical,
  deaths,
  code,
  country,
  updated,
  error,
}) => {
  console.log(confirmed);
  let display = null;
  if (confirmed) {
    display = (
      <section style={{ textAlign: 'center', margin: '25px 0' }}>
        <h2>
          {country} - <span>{code}</span>
        </h2>
        <p style={{ fontWeight: '500', fontSize: '1rem' }}>
          Last Updated: <span>{updated}</span>
        </p>
        <Card name="Confirmed" value={confirmed} />
        <Card name="Recovered" value={recovered} />
        <Card name="Critical" value={critical} />
        <Card name="Deaths" value={deaths} />
      </section>
    );
  }
  if (error) {
    display = (
      <div
        style={{ color: 'red', fontSize: '2rem'}}
      >
        Country not found...
      </div>
    );
  }
  return display;
};
const mapStateToProps = (state) => {
  return {
    confirmed: state.searched.confirmed,
    recovered: state.searched.recovered,
    critical: state.searched.critical,
    deaths: state.searched.deaths,
    code: state.searched.code,
    country: state.searched.country,
    updated: state.searched.lastUpdate,
    error: state.searched.error !== null,
  };
};
export default connect(mapStateToProps)(searchedList);
