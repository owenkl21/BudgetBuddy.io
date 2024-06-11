import { useMediaQuery } from 'react-responsive';
interface NavProps {
  resetTable: () => void;
}

const Nav = ({ resetTable }: NavProps) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="navbar bg-neutral justify-between">
      <div className="container  p-4">
        <div rounded-full>
          <img src="./logo.png" className="w-20 h-20" alt="logo" />
        </div>
        {!isSmallScreen && (
          <h1 className="text-3xl font-bold text-center text-[#1f2937]">
            Budget Buddy
          </h1>
        )}
      </div>
      <button
        onClick={resetTable}
        className="mr-5 font-semibold text-lg btn btn-secondary"
      >
        Reset Table
      </button>
    </div>
  );
};

export default Nav;
