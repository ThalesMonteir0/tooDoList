import React, { useState } from 'react';

import Tasks from './componentes/Tasks';
import './App.css'; 

const App = () => {
  // let message = "hello world!!"
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "ler livros",
      completed: true,
    },
  ]);

  return (
    <>
        <div className="container">
        <Tasks/>
        </div>
    </>
  );
  
};

export default App;