import React from 'react';

const cards = ({ name, value }) => {
  return (
    <div className={cards}>
      <h2>{name}</h2>
      <p>{value}</p>
    </div>
  );
};
export default cards;
