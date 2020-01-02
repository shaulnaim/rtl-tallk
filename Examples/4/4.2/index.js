import React, { useState } from 'react';

export default () => {
  const [loadingState, setLoadingState] = useState('none');

  const handleClick = () => {
    setLoadingState('pending');
  };

  return (
    <form>
      <input type='text' placeholder='Location' />
      <button onClick={handleClick}>
        {loadingState === 'pending'
          ? 'Loading...'
          : 'Use your current location'}
      </button>
    </form>
  );
};