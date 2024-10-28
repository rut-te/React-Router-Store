import React, { useEffect, useState } from 'react'
import ProductArea from '../ProductArea/ProductArea';
import { getBooks } from '../../services/storeService';

function Books() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getBooks().then(data => setProducts(data));
    
  }, []);
  return (
    <ProductArea products={products} />
  )
}

export default Books