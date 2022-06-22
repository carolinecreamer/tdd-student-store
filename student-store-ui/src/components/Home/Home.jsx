import * as React from "react"
import ProductGrid from "../ProductDetail/ProductGrid"
import Hero from "./Hero"
import "./Home.css"

export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <Hero></Hero>
      <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
    </div>
  )
}

