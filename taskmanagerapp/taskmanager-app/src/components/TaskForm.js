import React, { useContext, useState, useEffect } from 'react';
import {TaskListContext} from '../context/TaskListContext';


const TaskForm = () => {
    return (
        <div className="buttons">
            <button type="submit"
            className="btn add-task-btn">

            </button>
            <button className= "btn clear-btn">Clear</button>
            
        </div>
    );
};

export default TaskForm;