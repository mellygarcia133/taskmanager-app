import React from 'react';
import TaskList from '../components/TaskList';
import TaskListContextProvider from '../context/TaskListContext';
import Task from './Task';

const App = () => {
    return (
       <TaskListContextProvider>
           <div className="container">
               <div className="app-wrapper">
                   <div className="main">
                       
                   </div>
               </div>
           </div>
       </TaskListContextProvider>
    );
};

export default App;

