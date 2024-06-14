import { useForm } from 'react-hook-form';
import categories from '../modules/categories';
interface FormData {
  date: string;
  description: string;
  amount: number;
  category: string;
}

interface BudgetFormProps {
  onSubmit: (data: FormData) => void;
}

const BudgetForm = ({ onSubmit }: BudgetFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmitHandler = (data: any) => {
    const formData: FormData = {
      ...data,
      amount: parseFloat(data.amount),
    };
    onSubmit(formData);
    reset();
  };

  return (
    <div className="flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col p-4 rounded-lg border border-primary shadow-primary/20 shadow-lg"
      >
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">
          Transaction Details
        </h1>
        <div className="flex flex-col sm:flex-row sm:gap-5">
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="date">Date</label>
            <input
              {...register('date', { required: true })}
              id="date"
              type="date"
              placeholder=""
              className=" mt-2 mb-4 text-primary focus:outline-neutral/20 focus:border-neutral bg-slate-700 input input-bordered border-primary w-full"
            />
            {errors.date && (
              <span className="text-error mb-2">This field is required</span>
            )}
            <label htmlFor="description">Description</label>
            <input
              {...register('description', { required: true })}
              id="description"
              type="text"
              placeholder="Type here"
              className=" mt-2 mb-4 text-primary focus:outline-neutral/20 focus:border-neutral bg-slate-700 input input-bordered border-primary w-full"
            />
            {errors.description && (
              <span className="text-error mb-2">This field is required</span>
            )}
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label htmlFor="amount">Amount</label>
            <input
              {...register('amount', { required: true })}
              id="amount"
              type="number"
              placeholder="Type here"
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mt-2 mb-4 text-primary focus:outline-neutral/20 focus:border-neutral bg-slate-700 input input-bordered border-primary w-full"
            />
            {errors.amount && (
              <span className="text-error mb-2">This field is required</span>
            )}
            <label htmlFor="category">Category</label>
            <select
              {...register('category', { required: true })}
              id="category"
              className="mt-2 mb-4 text-primary focus:outline-neutral/20 focus:border-neutral bg-slate-700 select select-bordered border-primary w-full"
            >
              <option value="" disabled selected>
                Select category
              </option>
              {categories.map((category) => (
                <option value="category">{category}</option>
              ))}
            </select>
            {errors.category && (
              <span className="text-error mb-2">This field is required</span>
            )}
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="my-3 btn btn-neutral btn-md p-2 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BudgetForm;
