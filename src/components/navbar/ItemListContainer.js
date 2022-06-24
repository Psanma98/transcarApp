import React from 'react'
import { ItemCount } from '../ItemCount'

const ItemListContainer = ({greeting}) => {
 
  const msg = (mensaje) => {
    console.log (mensaje)
  }
  return (
    <>
      <div id='saludo'>{greeting}</div>
      <div><ItemCount
        stock = {3}
        initial = {1}
        onAdd = {msg}
       />
      </div>
    </>
  )
}

export default ItemListContainer