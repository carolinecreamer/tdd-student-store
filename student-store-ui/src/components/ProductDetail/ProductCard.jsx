import * as React from "react"
import "./ProductView.css"
import {Link} from "react-router-dom"

export default function ProductCard( {product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription, setIsFetching}) {
  console.log(productId)
  return (
    <div className="product-card">
      <Link onClick={()=>setIsFetching(true)} to={`/product/${productId}`} className="media"><img src={product.image}/></Link>
        
        <h3 className="product-name text">{product.name}</h3>
        <p className="product-price text">{product.price.toFixed(2)}</p>
        <div className="quantity">
            <button onClick={handleAddItemToCart(productId)}>+</button>
            <button onClick={handleRemoveItemToCart(productId)}>-</button>   
            {quantity > 0 ? <p className="product-quantity">{quantity}</p> : null}
        </div>
        {showDescription == true ? <p className="product-description">{product.description}</p> : null}
    </div>
  )
}

