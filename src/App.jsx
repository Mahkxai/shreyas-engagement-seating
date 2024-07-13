import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TableGrid from './components/TableGrid';
import { seatingData } from './data/seatingData';
import { PageContainer, Title, Subtitle } from './styles/StyledComponents';
import GlobalStyles from './styles/GlobalStyles';

function App() {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredData = seatingData.map(table => ({
		...table,
		guests: table.guests.filter(guest =>
			guest.toLowerCase().includes(searchTerm.toLowerCase())
		)
	})).filter(table => table.guests.length > 0);

	return (
		<>
			<GlobalStyles />
			<PageContainer>
				<Title>FIND YOUR SEAT</Title>
				<Subtitle>WELCOME TO OUR ENGAGEMENT CEREMONY</Subtitle>
				<Title>SHREYA & SHUBHAM</Title>
				<Subtitle>JULY 14, 2024</Subtitle>

				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<TableGrid tables={filteredData} />
			</PageContainer>
		</>
	);
}

export default App;