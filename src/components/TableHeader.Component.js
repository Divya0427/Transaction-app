import React from 'react';

const TableHeader = (props) => {
	const renderHeader = props.headerData.map((header, index) => {
		return <th key={index}>{header}</th>
	});
    return (
	    <thead>
			<tr>
				{renderHeader}				
			</tr>
		</thead>
    )
}

export default TableHeader;
