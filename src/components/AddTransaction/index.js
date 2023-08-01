import React, { useState } from 'react';
import './index.css'

const AddTransactionForm = ({ onAddTransaction }) => {
  const [transactionName, setTransactionName] = useState('');
  const [transactionType, setTransactionType] = useState('Credit');
  const [transactionCategory, setTransactionCategory] = useState('Entertainment');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data
    if (!transactionName || !amount || !date) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Convert the amount to a number
    const amountValue = parseFloat(amount);

    // Create a new transaction object
    const newTransaction = {
      transaction_name: transactionName,
      type: transactionType,
      category: transactionCategory,
      amount: amountValue,
      date,
    };

    // Call the onAddTransaction function to add the new transaction
    onAddTransaction(newTransaction);

    // Reset the form fields
    setTransactionName('');
    setTransactionType('Credit');
    setTransactionCategory('Entertainment');
    setAmount('');
    setDate('');
  };

  return (
    <form className="add-transaction-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="transactionName">Transaction Name</label>
        <input
          type="text"
          id="transactionName"
          value={transactionName}
          onChange={(e) => setTransactionName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="transactionType">Transaction Type</label>
        <select
          id="transactionType"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="transactionCategory">Transaction Category</label>
        <select
          id="transactionCategory"
          value={transactionCategory}
          onChange={(e) => setTransactionCategory(e.target.value)}
        >
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          {/* Add more options here */}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
