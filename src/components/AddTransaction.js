import React, { useContext, useState } from 'react';
import { TransactionsContext } from '../context/Transactions';

const AddTransaction = () => {
  const { transactions, setTransactions } = useContext(TransactionsContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            placeholder='Enter text...'
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            placeholder='Enter amount...'
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
        </div>
        <button
          className='btn'
          onClick={(e) => {
            e.preventDefault();
            if (text && amount !== 0)
              setTransactions([
                ...transactions,
                { id: transactions.length + 1, text: text, amount: amount },
              ]);
          }}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
