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
        <div className='container'>
          <Header />
          <div className='app'>
            <div className='read'>
              <Balance />
              <IncomeExpenses />
              <TransactionList />
            </div>
            <div className='write'>
              <AddTransaction />
            </div>
          </div>
        </div>
      </Transactions>
    </>
  );
}

export default App;
