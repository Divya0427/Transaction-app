import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableComponent from '../components/Table.Component';

export const BalanceContainer = ({data}) => {
	const headerData = ["Type", "Amount"];
	return(
		<div className="balance-container">
			<TableComponent tableHeaders={headerData} tableData={data} />
		</div>
	)
}

BalanceContainer.propTypes = {
	data: PropTypes.array.isRequired
}

const getTotalAmount = (transactions) => {
	return transactions.reduce((previous, currentVal) => {
		return previous + parseInt(currentVal.amount, 10);
	}, 0);
}

const mapStateToProps = (state) => {
	const totalSales = state.sales && getTotalAmount(state.sales);
	const totalPurchases = state.purchases && getTotalAmount(state.purchases);		
	return {
		data: [{
			type: "Total Sales",
			amount: totalSales			
		},
		{
			type: "Total Purchases",
			amount: totalPurchases
		}]
	}
}

export default connect(
  mapStateToProps
)(BalanceContainer);
