import React from 'react';

import Task from './Task';
const Tasks = ( {tasks, handleTaskclick,handleTaskDelition} )=>{
     
    return(
        <>
            {tasks.map(( task ) =>(
                <Task task={task} handleTaskclick={handleTaskclick} handleTaskDelition={handleTaskDelition}/>

            ))}
        </>
    )
};

export default Tasks;