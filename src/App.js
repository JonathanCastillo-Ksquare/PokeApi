import { useState, useEffect } from 'react';
import './App.css';
import Pokecard from './components/Pokecard';

function App() {

  const [pokes, setpokes] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const req = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5&offset=0')
      const res = await req.json();
      setpokes(res.results);
    }

    fetchPokemon()
  }, [])

  const list = pokes.map((value) => <Pokecard pokeUrl={value.url} key={value.name} />)

  return (
    <div className='App'>
      <ol>
        {list}
      </ol>
    </div>
  );
}

export default App;
