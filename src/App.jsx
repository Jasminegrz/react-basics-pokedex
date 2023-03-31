
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
  const handleClickNext = () => {
    pokemonIndex(count + 1)
  } 
  const handleClickPrevious = () => {
    pokemonIndex(count - 1)
  } 
  const isNext = count < pokemonList.length - 1
  const isPrevious = count > 0
  
  return (
    <div className="App">
      
      <PokemonCard pokemon={pokemonList[count]}/>
      {isPrevious?<button onClick={handleClickPrevious}>Précédent</button>:null}
      {isNext? <button onClick={handleClickNext}>Suivant</button>:null}
      {/* <button onClick={handleClickPrevious}>Précédent</button>
      <button onClick={handleClickNext}>Suivant</button> */}
    </div>
  )
}

export default App
