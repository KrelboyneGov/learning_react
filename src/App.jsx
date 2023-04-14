import ListaTareas from "./components/ListaTareas"; //indagar sobre qué función se
import AgregarTareas from "./components/AgregarTareas";
function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto text-sm p-10">
        <AgregarTareas />
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
