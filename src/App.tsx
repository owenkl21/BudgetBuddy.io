import { useEffect, useState } from 'react';

import './styles/App.css';
import ExpenseTable from './components/ExpenseTable';
import Nav from './components/Nav';
import Filter from './components/Filter';
import BudgetForm from './components/BudgetForm';

interface FormData {
  date: string;
  description: string;
  amount: number;
  category: string;
}

// Define the mock data

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleDelete = (id: number) => {
    console.log('Delete expense with id:', id);
    const newExpenses = expenses.filter((expense: any) => expense.id !== id);
    setExpenses(newExpenses);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    console.log('Selected category:', category);
  };

  const handleData = (data: FormData) => {
    console.log(data);
    const newExpense = { id: expenses.length + 1, ...data };
    setExpenses([newExpense, ...expenses]);
  };
  const handleReset = () => {
    setExpenses([]);
  };
  const isVisible =
    selectedCategory && selectedCategory !== 'All Categories'
      ? expenses.filter((e: any) => e.category === selectedCategory)
      : expenses;

  return (
    <>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Nav resetTable={handleReset} />
        <BudgetForm onSubmit={handleData} />
        <Filter onSelectCategory={handleSelectCategory} />
        <ExpenseTable expenses={isVisible} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
