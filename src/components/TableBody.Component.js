import React from 'react';

const TableBody = (props) => {
	const renderRows = props.tableBodyData.map((rowData, index) => {
		const { type, amount, date, description } = rowData;
		return (
			<tr key={index}>
				{ type ? <td>{type}</td> : null }
				{ description ? <td>{description}</td> : null }
				{ date ? <td>{date}</td> : null }
				{ amount? <td>{amount}</td> : null }
		   </tr>
		);
	});
	return (
		<tbody>
			{renderRows}
		</tbody>
	);
}

export default TableBody;
