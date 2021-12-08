import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className = "tc">
			<input 
				className = "pa3 ba b--red bg-lightest-red"
				type = 'search' 
				placeholder = 'seek a robot'
				onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;