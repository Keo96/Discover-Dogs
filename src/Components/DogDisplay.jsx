import React from 'react';

const DogDisplay = ({ dog, onBan, fetchNewDog, error }) => {
  const handleBanClick = (attributeName, value) => {
    onBan(attributeName, value);
  };

  const dogHasBreedInfo = dog && dog.breeds && dog.breeds.length > 0;

  return (
    <div className="dog-display">
        <h1>Disce Et Curiosus Esse</h1>
        <h3>Learn about dogs today</h3>
        {error && <p>Error: {error}</p>}
      {dogHasBreedInfo ? (
        <>
          <h2>{dog.breeds[0].name}</h2>
          <img src={dog.url} alt={`Image of ${dog.breeds[0].name}`} />
          <div className='button-container'>
          <button onClick={() => handleBanClick('breed_group', dog.breeds[0].breed_group)}>{dog.breeds[0].breed_group}</button>
          <button onClick={() => handleBanClick('life_span', dog.breeds[0].life_span)}>{dog.breeds[0].life_span}</button>
          <button onClick={() => handleBanClick('weight', dog.breeds[0].weight.imperial)}>{dog.breeds[0].weight.imperial} pounds</button>
          </div>
          
        </>
      ) : (
        <p>No breed information available.</p>
      )}
      <button onClick={fetchNewDog}>Discover New Dog</button>
    </div>
  );
};

export default DogDisplay;
