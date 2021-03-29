import React from 'react';
import './App.css';

import ProductListPage from './components/productListPage';
import ProductProvider from './components/provider';


function App() {
  
  return (
    <ProductProvider>
      <ProductListPage />
    </ProductProvider>
  );
}

export default App;
