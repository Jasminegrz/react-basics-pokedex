function NavBar({ count, pokemonIndex, pokemonList }) {
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
