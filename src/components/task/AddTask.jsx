const AddTask = ({ onAddClick }) => {
  return (
    <div className="container mx-auto items-center justify-between flex py-10 px-2 md:px-4 lg:px-6 xl:px-0">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          onClick={onAddClick}
          className="rounded-md bg-blue-500 hover:bg-blue-600 duration-300 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
