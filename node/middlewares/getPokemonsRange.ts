export async function getPokemonsRange(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { pokemon },
  } = ctx

  const response = await pokemon.getPokemonsByRange(0, 20)

  ctx.body = response
  ctx.status = 200
  await next()
}
