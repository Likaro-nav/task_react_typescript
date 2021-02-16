import React, { useState } from "react";
import "./styles.css";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

export default function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log(newTask);
  };

  const addTask = (name: string) => {
    const newTasks = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} />
        <button> Save </button>
      </form>
    </div>
  );
}
