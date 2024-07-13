import React from 'react';
// import { SearchInput, SearchWrapper, SearchLabel } from '../styles/StyledComponents';
import { TextField } from '@mui/material';
import { StyledTextField, SearchWrapper } from '../styles/StyledComponents';


function SearchBar({ searchTerm, setSearchTerm }) {
	return (
		<SearchWrapper>
			<StyledTextField
				fullWidth
				label="Search guest"
				variant="outlined"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			// InputLabelProps={{
			// 	style: { color: '#fff', fontFamily: 'OPTIBakerDanmarkOne', }, 
			//  }}
			/>
		</SearchWrapper>

		// <SearchWrapper>
		// 	<SearchInput
		// 		type="text"
		// 		placeholder=" "
		// 		value={searchTerm}
		// 		onChange={(e) => setSearchTerm(e.target.value)}
		// 		id="search"
		// 	/>
		// 	<SearchLabel htmlFor="search">Search for a guest...</SearchLabel>
		// </SearchWrapper>
	);
}

export default SearchBar;