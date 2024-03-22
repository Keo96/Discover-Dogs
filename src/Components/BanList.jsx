import React from 'react';

const BanList = ({ banList }) => {
  return (
    <div className="ban-list">
      <h3>Banned Attributes:</h3>
      <ul>
        {banList.map((attribute, index) => (
          <li key={index}>{`${Object.keys(attribute)[0]}: ${Object.values(attribute)[0]}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default BanList;
