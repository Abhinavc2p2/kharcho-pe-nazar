import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';
import IncomeExpenses from './component/IncomeExpenses';
import TransactionList from './component/TransactionList';
import AddTransaction from './component/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
    return ( <
        GlobalProvider >
        <
        Header > < /Header> <
        div className = "container" >
        <
        Balance > < /Balance> {
            /* <IncomeExpenses></IncomeExpenses>
             */
        } <
        IncomeExpenses > < /IncomeExpenses> <
        TransactionList > < /TransactionList> <
        AddTransaction > < /AddTransaction> <
        /div> <
        /GlobalProvider>
    );
}

export default App;