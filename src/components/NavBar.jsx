import { useState } from "react";
function NavBar({ count, pokemonIndex, pokemonList }) {
  const handleClickNext = () => {
    pokemonIndex(count + 1);
  };
  const handleClickPrevious = () => {
    pokemonIndex(count - 1);
  };
  const isNext = count < pokemonList.length - 1;
  const isPrevious = count > 0;

  return (
    <nav>
      {isPrevious ? (
        <button onClick={handleClickPrevious}>Précédent</button>
      ) : null}
      {isNext ? <button onClick={handleClickNext}>Suivant</button> : null}
    </nav>
  );
}

export default NavBar;
