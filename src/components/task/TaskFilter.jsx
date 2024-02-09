const TaskFilter = ({ onFilter }) => {
  return (
    <div className="px-2 md:px-4 lg:px-6 xl:px-0">
      <div className="container mx-auto h-20 w-full bg-dark text-white shadow-lg border border-gray-400 rounded-lg flex justify-end  items-center ">
        <div className="flex  gap-2 md:gap-4 lg:gap-10 w-full justify-end mr-[2px] md:mr-4 lg:mr-10">
          <button
            className="bg-sky-600 hover:bg-sky-500 duration-300 text-sky-50 text-xs md:text-sm font-semibold md:font-bold py-2 rounded tracking-normal  md:tracking-widest w-28"
            onClick={() => onFilter("All")}
          >
            All Task
          </button>
          <button
            className="bg-red-600 hover:bg-red-500 duration-300 text-red-50 text-xs md:text-sm font-semibold md:font-bold py-2 rounded tracking-normal  md:tracking-widest w-28"
            onClick={() => onFilter("High")}
          >
            High
          </button>
          <button
            className="bg-yellow-600 hover:bg-yellow-500 duration-300 text-yellow-50 text-xs md:text-sm font-semibold md:font-bold py-2 rounded tracking-normal  md:tracking-widest w-28"
            onClick={() => onFilter("Medium")}
          >
            Medium
          </button>
          <button
            className="bg-green-600 hover:bg-green-500 duration-300 text-green-50 text-xs md:text-sm font-semibold md:font-bold py-2 rounded tracking-normal  md:tracking-widest w-28"
            onClick={() => onFilter("Low")}
          >
            Low
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskFilter;
