import React from 'react';

const Transaction = ({
  transaction: { id, text, amount },
  deleteTransaction,
}) => {
  return (
    <>
      <li className={amount < 0 ? 'minus' : 'plus'}>
        {text}
        <span>
          {amount < 0 ? '-' : '+'}
          {Math.abs(Number(amount))}$
        </span>
        <button
          className='delete-btn'
          onClick={() => {
            deleteTransaction({ id, text, amount });
          }}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
