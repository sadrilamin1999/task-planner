import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import TaskFilter from "./TaskFilter";

const TaskBord = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const [tasks, setTasks] = useState([defaultTask]);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // add task modal show and edit handler
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddModal(false);
  };

  // edit task
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  // delete task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // close task modal
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  return (
    <section className="w-full h-[44rem]  !bg-[#191D26] text-white" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      <AddTask onAddClick={() => setShowAddModal(true)} />
      <TaskFilter />
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </section>
  );
};

export default TaskBord;
