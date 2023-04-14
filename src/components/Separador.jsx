import { useContext } from "react";
import { TaskContext } from "../context/ContextTask";
function Separador({ task }) {
  const { DeleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.Title}</h1>
      <p className="text-gray-400"> {task.Description}</p>
      <button
        className="bg-red-600 mt-4 rounded-md px-2 py-1 hover:bg-red-300"
        onClick={() => DeleteTask(task.Id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Separador;
