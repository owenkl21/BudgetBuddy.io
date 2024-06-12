import categories from '../modules/categories';

interface FilterProps {
  onSelectCategory: (name: string) => void;
}

const Filter = ({ onSelectCategory }: FilterProps) => {
  return (
    <div className="  w-[150px] md:w-[200px] dropdown dropdown-bottom  font-semibold m-4 mb-6 ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-secondary text-lg m-1 flex flex-row"
      >
        Filter
        <svg
          className="w-5 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#1f2937"
            d="M0 73.7C0 50.7 18.7 32 41.7 32H470.3c23 0 41.7 18.7 41.7 41.7c0 9.6-3.3 18.9-9.4 26.3L336 304.5V447.7c0 17.8-14.5 32.3-32.3 32.3c-7.3 0-14.4-2.5-20.1-7l-92.5-73.4c-9.6-7.6-15.1-19.1-15.1-31.3V304.5L9.4 100C3.3 92.6 0 83.3 0 73.7zM55 80L218.6 280.8c3.5 4.3 5.4 9.6 5.4 15.2v68.4l64 50.8V296c0-5.5 1.9-10.9 5.4-15.2L457 80H55z"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className=" text-[#1f2937] dropdown-content text-backgroundText w-[140px] md:w-[190px] z-[1] ml-1 menu p-2 shadow bg-neutral rounded-box "
      >
        <div className="max-h-40 overflow-y-auto">
          {categories.map((category) => (
            <li key={category} onClick={() => onSelectCategory(category)}>
              <a>{category}</a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Filter;
