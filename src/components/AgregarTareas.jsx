import { useState, useContext } from "react";
import { TaskContext } from "../context/ContextTask";
export default function AgregarTareas() {
  const { CreateNewTask } = useContext(TaskContext);
  const [Title, setNewTitle] = useState([]);
  const [Description, setNewDescription] = useState([]);

  const desHandler = (evento) => {
    setNewDescription(evento.target.value);
    {
      console.log(evento.target.value);
    }
  };
  const titleHandler = (evento) => {
    setNewTitle(evento.target.value);
    {
      console.log(evento.target.value);
    }
  };
  const submitHandler = (evento) => {
    evento.preventDefault();
    CreateNewTask({ Title, Description });
  };
  return (
    // <div className="max-w-md mx-auto">

    <form
      onSubmit={submitHandler}
      className="bg-slate-800 mb-10 p-5 max-w-md mx-auto "
    >
     <h1 className="text-xl font-extrabold text-white mb-4 mx-28">Organise Ur Tasks</h1>
      <input
        placeholder="Agrega el título"
        onChange={titleHandler}
        className="bg-slate-50 p-3 w-full mb-2"
      ></input>
      <textarea
        placeholder="Agregar Descripción"
        onChange={desHandler}
        className="bg-slate-50 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-600 text-white py-2 px-3"> Agregar</button>
    </form>
    //  </div>
  );
}
