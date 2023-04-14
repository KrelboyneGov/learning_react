import { createContext } from "react";
import { useEffect, useState } from "react";
import { tareas } from "../data/tasks.js";

export const TaskContext = createContext();
export default function TaskContextProvider(props) {
 
  const [tasks, setTasks] = useState([]);
  function CreateNewTask(NewTask) {
    setTasks([
      ...tasks,
      {
        Title: NewTask.Title,
        Id: tasks.length,
        Description: NewTask.Description,
      },
    ]);
  }
  function DeleteTask(OldTask) {
    const Tareanuevecita = tasks.filter((tasks) => tasks.Id !== OldTask);
    console.log(Tareanuevecita);
    setTasks(Tareanuevecita);
  }
  useEffect(() => {
    setTasks(tareas);
  }, []);
  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        CreateNewTask: CreateNewTask,
        DeleteTask: DeleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
