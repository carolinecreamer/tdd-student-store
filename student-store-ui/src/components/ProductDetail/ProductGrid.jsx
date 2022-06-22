import * as React from "react"
import "./ProductView.css"
import ProductCard from  "./ProductCard.jsx"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
  console.log(products)
  return (
    <div className="product-grid">
      {products.map((item, idx) =>
        <ProductCard product={item} quantity={0} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={false}/>
      )}
    </div>
  )
}


