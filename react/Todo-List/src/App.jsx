import React, { useState } from 'react';
import './App.css';
import TaskForm from './assets/Components/TaskForm';
import TaskDisplay from './assets/Components/TaskDisplay';

function App() {
  const [taskArr, setTaskArr] = useState([]);

  const addTask = (newTask) => {
    setTaskArr([...taskArr, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...taskArr];
    updatedTasks.splice(index, 1);
    setTaskArr(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <TaskDisplay taskArray={taskArr} onRemove={removeTask} />
    </>
  );
}

export default App;
