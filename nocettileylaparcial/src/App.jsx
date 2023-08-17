import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [datos, setDatos] = useState([]);

  const addDatos= (dato) => {
    setDatos([...datos,dato]);
  };

  const [nombre,setNombre]=useState("");
  const [animal,setAnimal]=useState("");

  const handleSubmit = (e)=>{
      e.preventDefault();      
      if(nombre.trim().length>=3 && animal.length>=6){
          addDatos({nombre,animal});
          setNombre("");
          setAnimal("");
      }else{
        alert("Por favor chequea que la información sea correcta")
      }      
    }

  return (
    <div className="App">
      <h1>Elige tu animal favorito</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingresá tu nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input type="text" placeholder="Ingresá tu animal favorito" value={animal} onChange={(e)=>setAnimal(e.target.value)} />
        <button type="submit">Enviar</button>        
      </form>
      <Card datos={datos}/>
    </div>
    
  )
}

export default App
