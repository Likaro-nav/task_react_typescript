import React, { useState, useRef } from "react";
import "./styles.css";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

export default function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const taskInput = useRef<HTMLInputElement>(null);

  const addTask = (name: string): void => {
    const newTasks = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    taskInput.current?.focus();
  };

  const toogleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  const removeTasks = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
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
                ref={taskInput}
                autoFocus
              />
              <button> Save </button>
            </form>
          </div>

          <div>
            {tasks.map((t: ITask, i: number) => (
              <div className="card card-body mt-2" key={i}>
                <h2 style={{ textDecoration: t.done ? "line-thourgh" : "" }}>
                  {t.name}
                </h2>
                <div>
                  <button
                    className="btn btn-secondary"
                    onClick={() => toogleDoneTask(i)}
                  >
                    {t.done ? "✅" : "❌"}
                  </button>
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeTasks(i)}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
