import React from 'react'
import ReactDOM from 'react-dom/client'
import { ProductProvider } from './component/ProductContext';
import Routing from './component/Routing'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductProvider>
    <Routing />
  </ProductProvider>,
)
