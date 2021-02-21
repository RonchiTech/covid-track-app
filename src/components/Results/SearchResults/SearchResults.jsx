import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../redux/actions'
import SearchedList from './SearchedList';
import classes from './SearchResults.module.css'
const SearchResults = ({ onSearch }) => {
  const [country, setCountry] = useState('');
  const searchCountryBtn = (e) => {
      e.preventDefault();
      onSearch(country);
  };
  return (
    <section>
      <h2 className={classes.SearchResults}>Search Result:</h2>
      <form>
        <input
        className={classes.Input}
          type="text"
          placeholder="Search Country..."
          onChange={(e) => setCountry(e.target.value)}
        />
        <button className={classes.Button} onClick={searchCountryBtn}>Search</button>
      </form>
      <SearchedList />
    </section>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (country) => dispatch(action.fetchResultStart(country)),
  };
};
export default connect(null, mapDispatchToProps)(SearchResults);
