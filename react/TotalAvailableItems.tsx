import React from 'react'
import { useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'

import axios from 'axios'

function TotalAvailableItems({ message = "Default message for total-items-available-app:" }) {
  const productContext = useProduct()
  const [selectedSKU, setSelectedSKU] = useState<number | string | null>(null)
  const [availableItems, setAvailableItems] = useState<number | string | null>(
    null
  )

  useEffect(() => {
    if (!productContext) return
    const {
      selectedItem: { itemId },
    } = productContext

    if (!itemId) return
    setSelectedSKU(itemId)
  }, [productContext])

  const fetchURL = `/_v/total-items-available/${selectedSKU}`

  axios.get(fetchURL).then((response) => setAvailableItems(response.data))

  return (
    <div>
      {message}: {availableItems} units
    </div>
  )
}

TotalAvailableItems.schema = {
  title: 'Total Available Items',
  description:
    'An app who renders a customized message containing the total amount of a product in stock.',
  type: 'object',
  properties: {
    message: {
      title: 'Message',
      description:
        'Mensagem para ser renderizada quando a quantidade produtos no estoque for igual a 1. Para utilizar o valor total de itens disponíveis no estoque em sua mensagem utilize o formato {totalItemsAvailable}. Exemplo: "Itens disponíveis em estoque: {totalItemsAvailable}".',
      type: 'string',
    },
  },
}

export default TotalAvailableItems
