
function PokemonCard({ pokemon }){
    return (
      <figure>
          <img src= {pokemon.imgSrc} alt= {pokemon.name} />
                <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
  }
  
  export default PokemonCard;