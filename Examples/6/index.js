import React, { useState, useCallback } from 'react';

const isValidLocation = (location) => !location;

export default () => {
	const [ loadingState, setLoadingState ] = useState('none');
	const [ location, setLocation ] = useState(null);

	const handleClick = useCallback(async () => {
		setLoadingState('pending');

		const asyncResult = await Promise.resolve('SE1 9GF');

		setLocation(asyncResult);
	}, []);

	const handleLocationChange = useCallback((e) => {
		setLocation(e.currentTarget.value);
	}, []);

	return (
		<main>
			<fieldset>
				{!isValidLocation(location) && <p>Error: The location is not valid</p>}

				<input type="text" placeholder="Location" value={location} onChange={handleLocationChange} />

				<button onClick={handleClick}>
					{loadingState === 'pending' ? 'Loading...' : 'Use your current location'}
				</button>
			</fieldset>
		</main>
	);
};
