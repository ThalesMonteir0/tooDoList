import React from 'react';

import {CgClose, CgInfo} from 'react-icons/cg'
import "./Task.css"
const Tasks = ( {task, handleTaskclick, handleTaskDelition  }) => {
    return(
        <div className='task-container' style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>   
            <div className="task-tittle" onClick={() => handleTaskclick(task.id)}>
                {task.tittle}
            </div>
            <div className="buttons-container">
                <button 
                className="remove-task-button" 
                onClick={() => handleTaskDelition(task.id)}
                >
                    <CgClose/>
                </button>

                <button 
                className="see-task-details-button" onClick={''}
                >
                    <CgInfo/>
                </button>

            </div>
         </div>
    )
}
 
export default Tasks;