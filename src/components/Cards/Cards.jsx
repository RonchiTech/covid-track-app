import React from 'react';
import classes from './Cards.module.css'
const cards = ({ name, value }) => {
  return (
    <div className={classes.Cards}>
      <h2>{name}</h2>
      <p>{value}</p>
    </div>
  );
};
export default cards;
