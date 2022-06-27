import * as React from "react"
//import ProductGrid from "../ProductDetail/ProductGrid"
import "./Home.css"

export default function Hero({products, handleAddItemToCart, handleRemoveItemToCart}) {
  // Create hero banner
  return (
    <div className="hero">
      <h1 className="intro">Welcome!</h1>
      <img className="hero-img" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png"></img>
    </div>
  )
}
