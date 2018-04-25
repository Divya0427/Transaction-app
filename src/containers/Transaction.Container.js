import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as transactActions from '../actions/Actions';
import TransactionComponent from '../components/Transaction.Component';
import AddTransactionComponent from '../components/AddTransaction.Component';
import { getSalesState } from '../selectors/sales.selector';
import { getPurchasesState } from '../selectors/purchases.selector';

class TransactionContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
	      description: '',
	      date: '',
	      amount: ''
	    }
		this.onSubmit = this._onSubmit.bind(this);
    	this.handleChange = this._handleChange.bind(this);
	}
	_handleChange(e) {
	  const { name, value } = e.target;
	  this.setState({ [name]: value });
	}
	_onSubmit(e) {
		e.preventDefault();
		let { description, date, amount } = this.state;

		if(description && date && amount) {
		  const category = this.props.location.state.type;
		  this.props.actions.addTransactionItem({ description, date, amount, category });
		}
		this.setState({
		  description: '',
		  date: '',
		  amount: ''
		})
	}
	render() {
		const headers = ["Description", "Date", "amount"];
		const { data, actions } = this.props;
		const tableData = {
			'headerData': headers,
			'bodyData': data
		}
		return(
			<div className="main-container">
				<AddTransactionComponent actions={actions} {...this.state} submitHandler={this.onSubmit} changeHandler={this.handleChange} id={this.state.type} />
				<TransactionComponent data={tableData} />
			</div>
		)
	}
}

TransactionContainer.propTypes = {
	actions: PropTypes.object.isRequired,
	data: PropTypes.array.isRequired
}


const mapStateToProps = (state, props) => {
	const type = props.location.state.type;
	if (type === 'purchases') {		
		return {
			data: getPurchasesState(state)
		}
	} else if (type === 'sales') {		
		return {
			data: getSalesState(state)
		}
	} else {
		props.history.push('/home', state);
	}
	
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(transactActions, dispatch)
	}
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionContainer));
