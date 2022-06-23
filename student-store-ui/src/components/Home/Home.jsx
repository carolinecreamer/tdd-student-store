import * as React from "react"
import ProductGrid from "../ProductDetail/ProductGrid"
import Hero from "./Hero"
import Search from "./Search"
import "./Home.css"

export default function Home({handleAddItemToCart, handleRemoveItemToCart, setIsFetching, isFetching, productsFiltered, 
                              handleChangeCategory, setSearch}) {
  if(isFetching){
    return null;
  }
  return (
    <div className="home">
      <Hero/>
      <div className="categories">
        <button onClick={()=>handleChangeCategory("all-categories")} className="all-categories">All Categories</button>
        <button onClick={()=>handleChangeCategory("clothing")} className="clothing">Clothing</button>
        <button onClick={()=>handleChangeCategory("food")} className="food">Food</button>
        <button onClick={()=>handleChangeCategory("accessories")} className="accessories">Accessories</button>
        <button  onClick={()=>handleChangeCategory("tech")} className="tech">Tech</button>
      </div>
      <Search setSearch={setSearch} isFetching={isFetching}/>
      <ProductGrid products={productsFiltered} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} setIsFetching={setIsFetching}/>
    </div>
  )
}

