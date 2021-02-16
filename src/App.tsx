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

  const addTask = (name: string) => {
    const newTasks = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <section className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                className="form-control"
                autoFocus
              />
              <button> Save </button>
            </form>
          </div>

          <div>
            {tasks.map((t: ITask, i: number) => (
              <h1 key={i}>{t.name}</h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
