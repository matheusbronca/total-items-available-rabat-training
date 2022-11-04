import type { ClientsConfig, ServiceContext } from '@vtex/api'
import { method, Service } from '@vtex/api'

import { Clients } from './clients'
import { getPokemonByName } from './middlewares/getPokemonByName'
import { getPokemonsRange } from './middlewares/getPokemonsRange'
import { totalItemsAvailable } from './middlewares/totalItemsAvailable'

const TIMEOUT_MS = 2000

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    // `status` is the route ID from service.json. It maps to an array of middlewares (or a single handler).
    getAvailableItems: method({
      GET: [totalItemsAvailable],
    }),

    getPokemonByName: method({
      GET: [getPokemonByName],
    }),

    getPokemonsRange: method({
      GET: [getPokemonsRange],
    }),
  },
})
