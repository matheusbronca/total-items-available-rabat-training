interface Args {
  from: number
  to: number
}

export const pokemons = (
  _: any,
  args: Args,
  { clients: { pokemon } }: Context
) => {
  const pokemonsResponse = pokemon.getPokemonsByRange(args.from, args.to)

  // eslint-disable-next-line no-console
  console.log('Pokemons:::', pokemonsResponse)

  return pokemonsResponse
}
