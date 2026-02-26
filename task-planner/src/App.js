import { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  const addTask = () => {

    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setMessage("Task added: " + task + "!");
    setTask("");
    setBgColor("lightblue");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mb-4" style={{ backgroundColor: bgColor }}>
        <h2 className="mb-3">React Task Planner</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <TaskList tasks={tasks} message={message} />
    </div>
  );
}

export default App;