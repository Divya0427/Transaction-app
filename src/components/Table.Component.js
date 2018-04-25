import React from 'react';
import TableHeader from './TableHeader.Component';
import TableBody from './TableBody.Component';

const TableComponent = (props) => {
	return (
		<table border="1" cellPadding="5" cellSpacing="5">
			<TableHeader headerData={props.tableHeaders} />
			<TableBody tableBodyData={props.tableData}/>
		</table>
	)
}

export default TableComponent;
