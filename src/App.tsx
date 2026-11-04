import './App.css'
import type { PacoteType } from './Types' 
import Pacote from './Pacote'
import { useReducer } from 'react'
import ListagemDePacotes from './ListagemDePacotes'
import pacoteReducer from "./pacoteReducer"



const data:Array<PacoteType> = [
  {
    id:"a4429e0a-0077-4272-bc90-fd4ca3db270c",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id:"a4429e0b-0077-4272-bc90-fd4ca3db270c",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 3.14
  }
  
]

function App() {
  const [pacotes, dispacher] = useReducer(pacoteReducer,data);
  

  return (
    <section>
      <h2>Pacote</h2>
      <ListagemDePacotes pacotes={pacotes} dispacher={dispacher}  />
    </section>
    
  )
}

export default App
