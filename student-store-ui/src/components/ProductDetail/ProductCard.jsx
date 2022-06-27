import * as React from "react"
import "./ProductView.css"
import {Link} from "react-router-dom"

export default function ProductCard( {product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription, setIsFetching}) {
  // Create a product card, these are shown both in the product grid without the description and in the product's
  // unique page with a description
  // These items have add and delete buttons that call functions in App.jsx to handle their behavior of adding
  // and removing items from the shopping cart
  return (
    <div className="product-card">
      <Link onClick={()=>setIsFetching(true)} to={`/product/${productId}`} className="media"><img src={product.image}/></Link>
        
        <h3 className="product-name text">{product.name}</h3>
        <p className="product-price text">{product.price.toFixed(2)}</p>
        <div className="quantity">
            <button className="quantity" onClick={()=>handleAddItemToCart(productId)}>+</button>
            <button className="quantity"onClick={()=>handleRemoveItemToCart(productId)}>-</button>   
            {quantity > 0 ? <p className="product-quantity">{quantity}</p> : null}
        </div>
        {showDescription == true ? <p className="product-description">{product.description}</p> : null}
    </div>
  )
}

