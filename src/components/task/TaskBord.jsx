import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import TaskFilter from "./TaskFilter";

const TaskBord = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "I want to Learn React such thanI can treat it.",
    tags: ["web", "react", "js"],
    priority: "High",
    status: false,
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const [tasks, setTasks] = useState([defaultTask]);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  // add task modal show and edit handler
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      setFilteredTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
      setFilteredTasks(
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
    setFilteredTasks(tasks.filter((task) => task.id !== taskId));
  };

  // close task modal
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  // filter tasks by priority
  const filterTasksByPriority = (priority) => {
    if (priority === "All") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.priority === priority));
    }
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
      <TaskFilter onFilter={filterTasksByPriority} />
      <TaskList
        tasks={filteredTasks}
        setTasks={setTasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </section>
  );
};

export default TaskBord;
