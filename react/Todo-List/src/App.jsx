import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './assets/Components/TaskForm';
import TaskDisplay from './assets/Components/TaskDisplay';

function App() {

  const [taskArr, setTaskArr] = useState([]);

  const passTask = (newtask) => {
    setTaskArr([...taskArr, newtask]);
  };



  return (
    <>
      <TaskForm onSubmit={passTask} />
      <TaskDisplay taskArr={taskArr} setTaskArr={setTaskArr} />
    </>
  );
}

export default App;
