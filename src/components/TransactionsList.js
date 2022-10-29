import React, { useContext } from 'react';
import { TransactionsContext } from '../context/Transactions';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, setTransactions } = useContext(TransactionsContext);
  // console.log('transactions: ', transactions);
  const deleteTransaction = (transaction) => {
    setTransactions(
      transactions.filter((trans) => {
        return trans.amount !== transaction.amount;
      }),
    );
  };

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions?.map((transaction, index) => {
          return (
            <Transaction
              key={index}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
