import React from 'react';

const ExpenseTable = () => {
  return (
    <div className="p-5 overflow-x-auto">
      <table className="table text-center w-full border border-primary">
        <thead className="text-[30px] text-primary">
          <tr>
            <th className="px-4 py-5 ">Description</th>
            <th className="px-4 py-2 mb-4">Amount</th>
            <th className="px-4 py-2 mb-4">Category</th>
            <th className="px-4 py-2 mb-4">Date</th>
            <th className="px-4 py-2 mb-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Description</td>
            <td className="px-4 py-2">Amount</td>
            <td className="px-4 py-2">Category</td>
            <td className="px-4 py-2">Date</td>
            <td className="px-4 py-2">Action</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Description</td>
            <td className="px-4 py-2">Amount</td>
            <td className="px-4 py-2">Category</td>
            <td className="px-4 py-2">Date</td>
            <td className="px-4 py-2">Action</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
