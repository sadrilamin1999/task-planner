const AddTask = ({ onAddClick }) => {
  return (
    <div className="container mx-auto items-center justify-between sm:flex border-b border-gray-200 py-6">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          onClick={onAddClick}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        {/* {setIsShowModal && <AddTaskModal onClose={handleCloseModal} />} */}
      </div>
    </div>
  );
};

export default AddTask;
