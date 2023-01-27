import React from 'react';

export const Search = ({ setSearchTerm, searchTerm }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	};

	return (
		<form
			id='form'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				id='search'
				className='search'
				placeholder='Search'
				value={searchTerm}
			/>
		</form>
	);
};
