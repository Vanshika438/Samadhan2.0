import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]); 

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // Delete task by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h2>📝 To-Do List</h2>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet. Add some tasks!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index} className="task-item">
              <span>{t}</span>
              <button 
                onClick={() => deleteTask(index)} 
                className="delete-btn"
                aria-label="Delete task"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
