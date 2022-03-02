import React from 'react'
import BrandsCategory from './BrandsCategory';

export default function ProductList(props) {
    const {products, productsBrand } = props
    console.log(productsBrand);
  return (
    <div>
        <h1>List of Products </h1>
        <div>
          {
            productsBrand.map(brand => (
              <BrandsCategory
              key={brand.id}
              products={products}
              brands={brand}
              />
            ))
          }
        </div>
    </div>
  )
}
