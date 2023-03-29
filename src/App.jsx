
import './App.css'
import { useState } from "react";
import PokemonCard from './components/PokemonCard'

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  
  const [count, pokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    pokemonIndex(count + 1)
  } 
  const handleClickBack = () => {
    pokemonIndex(count - 1)
  } 
  const isPrevious = pokemonIndex < pokemonList.length - 1
  const isBack = pokemonIndex > 0
  
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonList[count]}/>
      <button onClick={handleClickBack}>Précédent</button>
      <button onClick={handleClickPrevious}>Suivant</button>
    </div>
  )
}

export default App
