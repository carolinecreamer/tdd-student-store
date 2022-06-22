import * as React from "react"
import "./ProductView.css"

export default function ProductCard( {product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
    
  return (
    <div className="product-card">
        <img src={product.image}/>
        <h3 className="product-name text">{product.name}</h3>
        <p className="product-price text">{product.price.toFixed(2)}</p>
        <div className="quantity">
            <button onClick={handleAddItemToCart(productId)}>+</button>
            <button onClick={handleRemoveItemToCart(productId)}>-</button>   
            {quantity > 0 ? <p className="product-quantity">{quantity}</p> : null}
        </div>
    </div>
  )
}

