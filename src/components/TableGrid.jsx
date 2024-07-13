import React from 'react';
import TableCard from './TableCard';
import { TableGrid as StyledTableGrid } from '../styles/StyledComponents';

function TableGrid({ tables }) {
	return (
		<StyledTableGrid>
			{tables.map(({ table, guests }) => (
				<TableCard key={table} table={table} guests={guests} />
			))}
		</StyledTableGrid>
	);
}

export default TableGrid;