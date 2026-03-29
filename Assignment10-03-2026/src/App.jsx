import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(), // Unique ID using timestamp
        text: inputValue
      };
      setTasks([...tasks, newTask]); // Spread operator to keep old tasks
      setInputValue(''); // Clear input
    }
  };

  // Delete a task by filtering the ID
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h3>Dynamic Task List</h3>
      
      <div className="input-section">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button onClick={addTask} className="add-btn">Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            {task.text}
            <button onClick={() => deleteTask(task.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {tasks.length === 0 && <p className="empty-msg">No tasks yet. Add one!</p>}
    </div>
  );
}

export default App;