import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input]);
            setInput("");
        }
    };

    const deleteTask = (indexToDelete) => {
        setTasks(tasks.filter((_, i) => i !== indexToDelete));
    };

    return (
        <div className="App">
            <h1>ToDo List</h1>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={addTask}>Add Task</button>
            <ToDoList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
