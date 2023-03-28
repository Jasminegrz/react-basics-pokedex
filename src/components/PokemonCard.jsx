const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

function PokemonCard(){
    // const pokemon = pokemonList[0]
    // return pokemon === pokemonList.imgSrc ? pokemonList.imgSrc : <p>???</p>
    return (
        <figure>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur">
                <figcaption>bulbasaur</figcaption>
            </img>
        </figure>
    )
}

export default PokemonCard;

