interface Args {
  qty: number
}

export const pokemons = (
  _: any,
  args: Args,
  { clients: { pokemon } }: Context
) => {
  const pokemonsResponse = pokemon.getPokemonsByRange(args.qty)

  return pokemonsResponse
}
