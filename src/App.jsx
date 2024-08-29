import './App.css'
import { useState } from 'react'
import PokemonCard from './pokemonCard/pokemonCard'


function App() {

  const [pokemon, setPokemon] = useState({
    isLoading: false,
    data: null,
    errorPokemon: null
  })
  
  const [pokemonName, setPokemonName] = useState('')

  function handleinput(event){
    setPokemonName(event.target.value)
  }

  function fetchPokemon() {

      setPokemon({
        isLoading: true,
        data: null})


      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName).then((response) => {
        return response.json()
      }).then((data) => {
        setPokemon({
          isLoading: false,
          data: data
        })
      }).catch((error) => {
        setPokemon({
          isLoading: false,
          data: null,
          error: error.message
        })
      })
  }

  return (
    <>
    <div className='container'>
        <h1>Fetch Pokemon</h1>
        <div>
            <input type="text"  value={pokemonName} onChange={(e)=>handleinput(e)}/>
              <button onClick={fetchPokemon}>Fetch Pokemon</button>


         </div>
              {
                pokemon.isLoading ? <p>Loading...</p> : null
              }
              {
                pokemon.data ? <PokemonCard
                name={pokemon.data.name}
                height={pokemon.data.height}
                weight={pokemon.data.weight}
                abilities={pokemon.data.abilities.map((ability) => ability.ability.name).join(', ')}
                image={pokemon.data.sprites}
                /> : null
              }
              {
                pokemon.error ? <p>{pokemon.error}</p> : null
              }
      
    </div>
 
      
    </>
  )
}

export default App
