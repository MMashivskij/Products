import React, { useState } from 'react';
import { products, comments } from '../API/products';

export const List = React.createContext();

const ProductProvider = (props) => {


  const [listOfProducts, setProducts] = useState(products);

  const deleteProduct = (chosenProduct) => {
    setProducts(listOfProducts.filter(item => {
      return item.id !== chosenProduct
    }));
  }
  
  return (
    <List.Provider
    value={{
      listOfProducts,
      deleteProduct,
      comments
    }}
    >
      {props.children}
    </List.Provider>

  )
}

export default ProductProvider;
