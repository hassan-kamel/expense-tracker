import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import Transactions from './context/Transactions';
function App() {
  return (
    <>
      <Transactions>
        <Header />
        <div className='cointainer'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </Transactions>
    </>
  );
}

export default App;
