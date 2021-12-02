import React, { useState } from 'react';

import Tasks from './componentes/Tasks';
import AddTask from './componentes/AddTask';
import './App.css'; 


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      tittle: "estudar programação",
      completed: false,
    },
    {
      id: "2",
      tittle: "ler livros",
      completed: true,
    },
  ]);

  const handleTaskAddition = (taskTittle) => {
    const newTasks = [
      ...tasks,
      {
        tittle: taskTittle,
        id: Math.random(10),
        completed: false,
      }
    ]
    setTasks(newTasks)
  }

  return (
    <>
        <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks}/>
        </div>
    </>
  );
  
};

export default App;