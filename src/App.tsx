import './App.css'
import type { PacoteType } from './Types' 
import Pacote from './Pacote'
import { useState } from 'react'; 
import ListagemDePacotes from './ListagemDePacotes'



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
  const [pacotes, setPacotes] = useState(data);

  function excluirPacote(id: string){
    // const novoPacotes = [];
    // for(let i = 0;i<pacotes.length;i++){
    //   if(pacotes[i]!=pacote){
    //     novoPacotes.push(pacotes[i]);
    //   }
    // }
    const novoPacotes = pacotes.filter(p=>p.id!=id);
    setPacotes(novoPacotes);
  }

  return (
    <section>
      <h2>Pacote</h2>
      <ListagemDePacotes pacotes={pacotes} acaoExcluir={excluirPacote} />
    </section>
    
  )
}

export default App
