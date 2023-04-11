function NavBar({ count, pokemonIndex, pokemonList }) {
  if (pokemonList[count].name == "pikachu") {
    alert("Pika pikachu !!!");
  }
  return (
    <nav>
      {pokemonList.map((el, index) => (
        <button key={index} onClick={() => pokemonIndex((count = index))}>
          {el.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
