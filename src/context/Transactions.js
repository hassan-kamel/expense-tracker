import { createContext, useEffect, useState } from 'react';

export const TransactionsContext = createContext();

const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('transactions')) !== null) {
      setTransactions(JSON.parse(localStorage.getItem('transactions')));
    } else {
      setTransactions([
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
      ]);
    }
  }, []);
  useEffect(() => {
    if (transactions) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  const amount = transactions?.map((transaction) => transaction.amount);
  const totalAmount = amount?.reduce((sum, item) => (sum += item), 0);
  const income = amount
    ?.filter((item) => item > 0)
    .reduce((sum, item) => (sum += item), 0);

  const expense =
    amount?.filter((item) => item < 0).reduce((sum, item) => (sum += item), 0) *
    -1;

  return (
    <TransactionsContext.Provider
      value={{ transactions, setTransactions, totalAmount, income, expense }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
