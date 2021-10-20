import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  let count = 4;

  const expenses = [
    { id: 'e1', date: new Date(2021, 4, 12), title: 'Car Insurance', price: 279.65 },
    { id: 'e2', date: new Date(2021, 2, 28), title: 'House Loan', price: 1000 },
    { id: 'e3', date: new Date(2020, 7, 14), title: 'Car EMI', price: 500 },
  ];

  const submitHandle = (data) => {
    console.log('expense data on App Component from ExpenseForm component : ', data);
    expenses.push({ id: `e${count}`, ...data });
    count++;
  };

  return (
    <div>
      <NewExpense onSubmit={submitHandle} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
