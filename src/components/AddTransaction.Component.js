import React from 'react';

const AddTransactionComponent = (props) => {
  const { id, date, description, amount, changeHandler, submitHandler } = props;
  return(
    <div id={id}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="description"
          value={description}
          onChange={changeHandler}
          placeholder="Description.."
        />
        <input name="date" type="date" value={date} onChange={changeHandler} />
        <input name="amount" type="number" min="0" value={amount} onChange={changeHandler} placeholder="Amount.." />
        <button type="submit">Add</button>
      </form>
    </div> 
  )
}

export default AddTransactionComponent;
