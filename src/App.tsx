import { useState } from 'react';
import reactLogo from './assets/react.svg';
import logo from './assets/logo.png';
import './styles/App.css';
import ExpenseTable from './components/ExpenseTable';

function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div rounded-full>
          <img src="./logo.png" className="w-20 h-20" alt="logo" />
        </div>
        <h1 className="text-3xl font-bold text-center">Budget Buddy</h1>
      </div>
      <ExpenseTable />
    </>
  );
}

export default App;
