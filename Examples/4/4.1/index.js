import React, { useState } from 'react';

export default () => {
	const [ isLoading, setIsLoading ] = useState(false);

	const handleClick = () => {
		setIsLoading(true);
	};

	return (
		<form>
			<input type="text" placeholder="Location" />
            <button onClick={handleClick}>
                {isLoading ? 'Loading...' : 'Use your current location'}
            </button>
		</form>
	);
};
