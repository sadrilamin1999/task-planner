import { useState } from "react";
import AddTaskModal from "./AddTaskModal";

const AddTask = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="container mx-auto items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          onClick={handleShowModal}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        {isShow && <AddTaskModal />}
      </div>
    </div>
  );
};

export default AddTask;
