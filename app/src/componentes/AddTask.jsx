import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';
const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);

    };
    const handleTaskclick = () =>{
        handleTaskAddition(inputData)
    }
    return (
        <div className="add-task-container">
            <input
                 onChange={handleInputChange} 
                value={inputData} 
                className="add-task-input" 
                type="text" 
             />
             ; 
            <div className="add-task-button">
                <Button onClick={handleTaskclick}>Adicionar</Button>
            </div>
            
        </div>
    )
    
    
};
 
export default AddTask;
