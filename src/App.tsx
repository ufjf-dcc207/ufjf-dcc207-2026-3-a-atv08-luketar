import './App.css'
import type { PacoteType } from './Types' 
import Pacote from './Pacote'


const data:Array<PacoteType> = [
  {
    id:"a4429e0a-0077-4272-bc90-fd4ca3db270c",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id:"a4429e0a-0077-4272-bc90-fd4ca3db270c",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 3.14
  }
  
]

function App() {

  return (
    <section>
      <h2>Pacote</h2>
      <div className = 'pacotes'>
        {data.map(p => <Pacote pacote={p} key={p.id}/>)}
      </div>

    </section>
    
  )
}

export default App
