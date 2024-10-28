import React from 'react'
//import style from './ProdArea.module.css'
import Card from '../Card/Card'

function ProductArea({products}) {
  return (
    <div /*className={style.container}*/>
      {products && products.map(product => (
        <Card key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductArea