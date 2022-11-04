import { IOClients } from '@vtex/api'
import { Logistics } from '@vtex/clients' // More information at https://github.com/vtex/io-clients

import { PokemonClient } from './pokemon-client'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get logistics() {
    return this.getOrSet('logistics', Logistics)
  }

  public get pokemon() {
    return this.getOrSet('pokemon', PokemonClient)
  }
}
