import React, { useCallback, useState} from 'react';

export default ({ onSubmit }) => {
  const [loadingState, setLoadingState] = useState('none');
  const [location, setLocation] = useState('');

  const handleClick = useCallback(async () => {
    setLoadingState('pending');

    const asyncResult = await Promise.resolve('SE1 9GF');

    setLocation(asyncResult);
  }, []);

  const handleLocationChange = useCallback(e => {
    setLocation(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      onSubmit(location);
    },
    [location]
  );

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        {location.length > 10 && (
          <p>
            Error: The location field cannot contain more than 10 characters
          </p>
        )}

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

      <button type='submit' data-testid='submitButton'>
        Save
      </button>
    </form>
  );
};