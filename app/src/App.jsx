import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './componentes/Header';
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

  const handleTaskclick = (taskId) =>{
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });
    setTasks(newTasks)
  }
  const handleTaskAddition = (taskTittle) => {
    const newTasks = [
      ...tasks,
      {
        tittle: taskTittle,
        id: uuidv4(),
        completed: false,
      }
    ]
    setTasks(newTasks)
  }
  const handleTaskDelition = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId )
    setTasks(newTasks)
  }

  return (
    <Router>
        <div className="container">
          <Header/>
          <Route 
          path="/" 
          exact 
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskclick={handleTaskclick} handleTaskDelition={handleTaskDelition} />
            </>
            
          )}
        />
        </div>
    </Router>
  );
  
};

export default App;