import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="py-6 md:py-8 w-full !bg-[#191D26] text-white">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <h2 className="text-4xl">Task planner</h2>
        </div>
      </nav>
    </header>
  );
};

export default Header;
