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
        <div className="overflow-x-auto">
          <table className="table text-center sm:w-1/3 md:w-full border mb-5 border-primary shadow-primary/20 shadow-lg">
            <thead className=" sm md:text-[30px] text-primary border-primary">
              <tr className="border-primary">
                <th className="px-0 md:px-4 py-5 sm:py-2 md:py-5 lg:py-2">
                  Date
                </th>
                <th className="px-0 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                  Description
                </th>
                <th className="px-0 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                  Amount
                </th>
                <th className="px-0 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                  Category
                </th>
                <th className="px-0 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr className="border-primary" key={expense.id}>
                  <td className="px-1 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                    {expense.date}
                  </td>
                  <td className="px-1 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                    {expense.description}
                  </td>
                  <td className="px-1 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                    {'R ' + expense.amount.toFixed(2)}
                  </td>
                  <td className="px-1 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                    {expense.category}
                  </td>
                  <td className="px-1 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2">
                    <button
                      className="btn btn-neutral m-3"
                      onClick={() => {
                        onDelete(expense.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
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
