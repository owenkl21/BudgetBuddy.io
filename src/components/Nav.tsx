import React from 'react';

const Nav = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="container  p-4">
        <div rounded-full>
          <img src="./logo.png" className="w-20 h-20" alt="logo" />
        </div>
        <h1 className="text-3xl font-bold text-center text-[#1f2937]">
          Budget Buddy
        </h1>
      </div>
    </div>
  );
};

export default Nav;
