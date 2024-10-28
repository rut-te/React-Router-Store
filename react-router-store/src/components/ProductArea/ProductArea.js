import React from 'react'
import style from './ProductArea.module.css'
import Card from '../Card/Card'

function ProductArea({products}) {
  return (
    <div className={style.container}>
      {products && products.map(product => (
        <Card key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductArea