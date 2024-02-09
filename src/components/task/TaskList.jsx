const TaskList = ({ tasks, setTasks, onEdit, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-600";
      case "Medium":
        return "bg-yellow-600";
      case "Low":
        return "bg-green-600";
      default:
        return "";
    }
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          const updatedTask = { ...task, status: !task.status };
          if (updatedTask.status) {
            // If the task status is true, add the green background color class
            return { ...updatedTask, bgColorClass: "bg-green-900" };
          } else {
            // If the task status is false, remove the background color class
            const { bgColorClass, ...rest } = updatedTask;
            return rest;
          }
        }
        return task;
      })
    );
  };

  return (
    <div className="container mx-auto overflow-auto mt-5">
      <h2 className="text-white text-3xl">Total task: {tasks.length}</h2>
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[24px] md:w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[150px] md:w-[250px]">
              {" "}
              Title{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[150px] md:w-[250px]">
              {" "}
              Description{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[150px] md:w-[350px] truncate">
              {" "}
              Tags{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Priority{" "}
            </th>

            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className={`border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2 ${
                task.bgColorClass || ""
              }`}
            >
              <td>
                <input
                  className="border-2 border-sky-400"
                  type="checkbox"
                  checked={task.status}
                  onChange={() => toggleTaskStatus(task.id)}
                />
              </td>
              <td>{task.title}</td>
              <td>
                <div>{task.description}</div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="flex justify-center">
                <div
                  className={`text-center px-3 py-1 rounded-full inline ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </div>
              </td>

              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    className="text-red-500"
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-500"
                    onClick={() => onEdit(task)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
