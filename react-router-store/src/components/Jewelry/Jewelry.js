import React, { useEffect, useState } from 'react'
//import style from './Jewelry.module.css'
import ProductArea from '../ProductArea/ProductArea';
import { getJewelry } from '../../services/storeService';

function Jewelry() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getJewelry().then(data=>setProducts(data));
  }, []);
  return (
    <ProductArea products={products} />
  )
}

export default Jewelry