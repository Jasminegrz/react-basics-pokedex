import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

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

  useEffect(() => {
    alert("Hello pokemon trainer :)");
  }, []);

  const [count, pokemonIndex] = useState(0);

  return (
    <div className="App">
      <NavBar
        count={count}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
      <PokemonCard pokemon={pokemonList[count]} />
    </div>
  );
}

export default App;
