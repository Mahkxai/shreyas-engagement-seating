import React from 'react';
import { TableCard as StyledTableCard, TableNumber, GuestList, GuestItem } from '../styles/StyledComponents';

function TableCard({ table, guests }) {
	return (
		<StyledTableCard>
			<TableNumber>{table}</TableNumber>
			<GuestList>
				{guests.map((guest, index) => (
					<GuestItem key={index}>{guest}</GuestItem>
				))}
			</GuestList>
		</StyledTableCard>
	);
}

export default TableCard;