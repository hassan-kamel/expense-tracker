import React, { useContext } from 'react';
import { TransactionsContext } from '../context/Transactions';

const Balance = () => {
  const { totalAmount } = useContext(TransactionsContext);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalAmount}</h1>
    </>
  );
};

export default Balance;
