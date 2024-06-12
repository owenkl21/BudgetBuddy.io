import { useMediaQuery } from 'react-responsive';

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
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const calculateTotalAmount = (expenses: ExpenseTableItem[]) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };
  const totalAmount = calculateTotalAmount(expenses);
  return (
    <>
      {expenses.length === 0 ? (
        <div className="p-5 flex items-center">
          <p className=" mb-6 flex justify-center w-full text-xl font-bold alert border-primary bg-secondary text-backgroundText">
            No transactions have been logged yet.
          </p>
        </div>
      ) : (
        <div className="m-5 overflow-x-auto">
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
                <th className="px-0 md:px-4 py-2 sm:py-2 md:py-2 lg:py-2 pr-4">
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
                      className={
                        isSmallScreen
                          ? 'btn bg-transparent border-none no-hover p-2'
                          : 'btn btn-neutral m-3'
                      }
                      onClick={() => {
                        onDelete(expense.id);
                      }}
                    >
                      {isSmallScreen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width={'20px'}
                        >
                          <path
                            className="fa-secondary"
                            opacity=".4"
                            fill="#fda4af"
                            d="M394.6 466.8L416 96H32L53.4 466.8c1.5 25.4 22.5 45.2 47.9 45.2H346.7c25.4 0 46.5-19.8 47.9-45.2z"
                          />
                          <path
                            className="fa-primary"
                            fill="#fda4af"
                            d="M163.8 0c-12.1 0-23.2 6.8-28.6 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8z"
                          />
                        </svg>
                      ) : (
                        'Delete'
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-primary text-center">
              <tr className="border-primary">
                <td
                  colSpan={1}
                  className="font-bold px-1 md:px-4 py-4 sm:py-2 md:py-2 lg:py-2 text-primary md:text-[30px]"
                >
                  Total
                </td>
                <td
                  colSpan={3}
                  className="font-bold px-1 md:px-4 py-4 sm:py-2 md:py-2 lg:py-2 text-primary"
                ></td>
                <td
                  colSpan={1}
                  className="font-bold px-1 md:px-4 py-4 sm:py-2 md:py-2 lg:py-2 text-primary"
                >
                  {'R ' + totalAmount.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
};

export default ExpenseTable;
