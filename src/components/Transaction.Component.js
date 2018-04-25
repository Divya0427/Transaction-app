import React from 'react';
import TableComponent from './Table.Component';

const TransactionComponent = (props) => {
	const { headerData, bodyData } = props;
	return(
		<TableComponent tableHeaders={headerData} tableData={bodyData} />
	)
}

export default TransactionComponent;
