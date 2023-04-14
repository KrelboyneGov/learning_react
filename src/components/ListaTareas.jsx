//Esto es un componente
import { useContext } from "react";
import { TaskContext } from "../context/ContextTask";
import Separador from "./Separador";
export default function ListaTareas() {
  const {tasks}=useContext(TaskContext)
  return (
    <div className="grid grid-cols-4 gap-2">

      {tasks.map((task) => (
        <Separador task={task} key={task.Id}/>
      ))}
    </div>
  );
}
