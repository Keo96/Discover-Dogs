import React from 'react';

const History = ({ history }) => {
  return (
    <div className="history">
      <h3>Previously Viewed Dogs:</h3>
      <div className="history-list">
        {history && history.length > 0 ? (
          history.map((dog, index) => {
            const breed = dog.breeds && dog.breeds.length > 0 ? dog.breeds[0] : null;
            return (
              <div key={index} className="history-item">
                <img
                  className="history-image"
                  src={dog.url}
                  alt={breed ? `Image of ${breed.name}` : `Dog ${index}`}
                  width="100" height="100"
                />
                <p>{breed ? breed.name : 'Unknown Breed'}</p>
              </div>
            );
          })
        ) : (
          <p>No previously viewed dogs.</p>
        )}
      </div>
    </div>
  );
};

export default History;