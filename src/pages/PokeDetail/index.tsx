import { useParams } from "react-router-dom";

import { usePokemon } from "../../Hooks/usePokemon";
import { PokemonDetail } from "../../Components/PokemonDetail";

export const PokeDetail = () => {
  const { pokeId } = useParams();
  const { pokemon } = usePokemon("", pokeId);

  return <PokemonDetail pokemon={pokemon!} />;
};
