import React from 'react';

interface ExpenseTableItem {
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseTableProps {
  expenses: ExpenseTableItem[];
  onDelete: (id: number) => void;
}
const ExpenseTable = ({ expenses, onDelete }: ExpenseTableProps) => {
  return (
    <>
      {expenses.length === 0 ? (
        <div className="p-5 flex items-center">
          <p className="flex justify-center w-full text-xl font-bold alert border-primary bg-secondary text-backgroundText">
            No transactions have been logged yet.
          </p>
        </div>
      ) : (
        <div className=" flex p-5 overflow-x-auto">
          <table className="table text-center w-full border border-primary">
            <thead className="text-[30px] text-primary border-primary">
              <tr className={'border-primary'}>
                <th className="px-4 py-5 mb-4">Date</th>
                <th className="px-4 py-2 mb-4">Description</th>
                <th className="px-4 py-2 mb-4">Amount</th>
                <th className="px-4 py-2 mb-4">Category</th>
                <th className="px-4 py-2 mb-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr className={'border-primary'} key={expense.id}>
                  <td className="px-4 py-2">{expense.date}</td>
                  <td className="px-4 py-2">{expense.description}</td>
                  <td className="px-4 py-2">{expense.amount}</td>
                  <td className="px-4 py-2">{expense.category}</td>
                  <button
                    className="btn btn-neutral m-3"
                    onClick={() => {
                      onDelete(expense.id);
                    }}
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ExpenseTable;
