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

  return (
    <>
        <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
        </div>
    </>
  );
  
};

export default App;