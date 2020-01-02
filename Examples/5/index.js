import React, { useState } from 'react';

const isValidLocation = location => !location;

export default () => {
  const [loadingState, setLoadingState] = useState('none');
  const [location, setLocation] = useState(null);

  const handleClick = () => {
    setLoadingState('pending');
  };

  const handleLocationChange = e => {
    setLocation(e.currentTarget.value);
  };

  return (
    <main>
      <fieldset>
        {!isValidLocation(location) && <p>Error: The location is not valid</p>}
        <input
          type='text'
          placeholder='Location'
          value={location}
          onChange={handleLocationChange}
        />

        <button onClick={handleClick}>
          {loadingState === 'pending'
            ? 'Loading...'
            : 'Use your current location'}
        </button>
      </fieldset>
    </main>
  );
};
