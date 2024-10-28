import React, { useEffect, useState } from 'react'
//import style from './Electronics.module.css'
import ProductArea from '../ProductArea/ProductArea';
import { getElectronics } from '../../services/storeService';

function Electronics() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getElectronics().then(data => setProducts(data));
  }, []);
  return (
    <ProductArea products={products} />
  )
}

export default Electronics