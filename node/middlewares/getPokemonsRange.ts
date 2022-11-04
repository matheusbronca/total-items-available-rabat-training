export async function getPokemonsRange(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { pokemon },
  } = ctx

  // const from = ctx.vtex.route.params.from
  // const to = ctx.vtex.route.params.to
  const { qty } = ctx.vtex.route.params

  // console.log('From:::', from)
  // console.log('To:::', to)

  const response = await pokemon.getPokemonsByRange(Number(qty))

  ctx.body = response
  ctx.status = 200
  await next()
}
