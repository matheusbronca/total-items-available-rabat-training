export async function totalItemsAvailable(
  ctx: Context,
  next: () => Promise<any>
) {
  const {
    clients: { logistics },
  } = ctx

  const { skuId } = ctx.vtex.route.params

  const response = await logistics.listInventoryBySku(skuId as string)
  const totalOfItemsAvailableInInventory = response.balance[0].totalQuantity

  ctx.body = totalOfItemsAvailableInInventory
  ctx.status = 200
  await next()
}
