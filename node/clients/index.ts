import { IOClients } from '@vtex/api'
import { Logistics } from '@vtex/clients' // More information at https://github.com/vtex/io-clients

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get logistics() {
    return this.getOrSet('logistics', Logistics)
  }
}
