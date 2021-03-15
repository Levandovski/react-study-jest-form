import React, { useState } from 'react';

    const Todo = () => {
        
        const [task, updateTask]=useState('')
        
        const [tasks, updateTasks]=useState([])

        const handleInputChange=event=>updateTask(event.target.value)
        
        const handleFormSubmit=event=>{
           if(task.trim()){ 
                event.preventDefault()
                updateTasks([...tasks, task])
                updateTask('')
            }
        }
        return (          
            <>
                <form onSubmit={handleFormSubmit}>
                    <input 
                        type='text' 
                        onChange={handleInputChange}
                        placeholder="Type a new task here"
                        data-testid="form-field"
                     />
                    <button 
                        data-testid="form-btn" 
                        type='submit'>Add New Task</button>
                </form>
                <table data-testid="table">
                    <thead>
                        <tr>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            tasks.map((t,index) => (
                                <tr key={index}>
                                    <td>{t}</td>
                                </tr>
                                )
                            )
                         }
                    </tbody>
                </table>
            </>
        )
    }

export default Todo