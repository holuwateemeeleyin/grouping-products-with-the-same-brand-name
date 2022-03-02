import React from 'react'

export default function (props) {
    const {products, brands} = props
  return (
    <div>
        <h2>{brands.category}</h2>
        <div>
            {
                products.filter(product => (
                    product.brand_name === brands.category 
                    )).map(product => (
                        <div>{product.product_name}</div>
                    ))
            }
        </div>
    </div>
  )
}
