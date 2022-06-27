import * as React from "react"
import "./ProductView.css"
import ProductCard from "./ProductCard"

export default function ProductView({product, productId,handleAddItemToCart, handleRemoveItemToCart}) {
  // Call the product card component to create a large display of the product for its unique product page
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard product={product} productId={productId} quantity={0} 
      handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} 
      showDescription={true}/>
    </div>
  )
}

