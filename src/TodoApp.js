import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");        // For the text input
  const [tasks, setTasks] = useState([]);      // List of all tasks

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;            // Prevent empty tasks
    setTasks([...tasks, task]);                 // Add new task to list
    setTask("");                                // Clear input field
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>To-Do List</h1>

      {/* Input + Add Button */}
      <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "5px" }}>
          Add
        </button>
      </form>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              padding: "8px",
              background: "#f2f2f2",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {t}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;