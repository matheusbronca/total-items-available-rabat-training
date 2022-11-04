import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import { useCssHandles } from 'vtex.css-handles'
// import styles from './styles/totalItemsAvailable.module.css'

function PokemonList({ qty }: any) {
  const [pokemons, setPokemons] = useState<any>(null)

  useEffect(() => {
    const url = `https://mathe--sqlipartnerfr.myvtex.com/_v/pokemons-range/${qty}`

    axios.get(url).then((response) => {
      setPokemons(response.data.results)
    })
  }, [])
  // useEffect(() => {
  //   console.log('Pokemons:::', pokemons)
  // }, [pokemons])

  if (!pokemons) return null
  return (
    <ul>
      {pokemons?.map((pokemon: any) => {
        return <li key={pokemon.name}>{pokemon.name}</li>
      })}
    </ul>
  )
}

PokemonList.schema = {
  title: 'List of Pokemons',
  description: 'Renders a list of pokemons',
  type: 'object',
  properties: {
    qty: {
      title: 'Quantity',
      description: 'Quantity of cards to be rendered',
      type: 'number',
    },
  },
}

export default PokemonList
