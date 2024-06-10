import { useState } from 'react';
import reactLogo from './assets/react.svg';
import logo from './assets/logo.png';
import './styles/App.css';
import ExpenseTable from './components/ExpenseTable';
import Nav from './components/Nav';

// Define the mock data

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: '2024-06-10',
      description: 'Lunch at a cafe',
      amount: 20,
      category: 'Food',
    },
    {
      id: 2,
      description: 'Office supplies',
      amount: 50,
      category: 'Office',
      date: '2024-06-09',
    },
    {
      id: 3,
      date: '2024-06-08',
      description: 'Online course subscription',
      amount: 100,
      category: 'Education',
    },
    {
      id: 4,
      date: '2024-06-07',
      description: 'Electricity bill',
      amount: 75,
      category: 'Utilities',
    },
    {
      id: 5,
      date: '2024-06-06',
      description: 'Gym membership',
      amount: 40,
      category: 'Health',
    },
    {
      id: 6,
      date: '2024-06-05',
      description: 'Grocery shopping',
      amount: 60,
      category: 'Food',
    },
  ]);
  const handleDelete = (id: number) => {
    console.log('Delete expense with id:', id);
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };
  return (
    <>
      <Nav />
      <ExpenseTable expenses={expenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
