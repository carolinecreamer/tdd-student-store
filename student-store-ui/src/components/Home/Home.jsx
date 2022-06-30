import * as React from "react"
import ProductGrid from "../ProductDetail/ProductGrid"
import Hero from "./Hero"
import Search from "./Search"
import NotFound from "../NotFound/NotFound"
import "./Home.css"

export default function Home({handleAddItemToCart, handleRemoveItemToCart, setIsFetching, isFetching, productsFiltered, 
                              handleChangeCategory, setSearch, category}) {
  if(isFetching){
    return null;
  }

  if (productsFiltered.length === 0) {
    return (
        <NotFound/>
    )
  }
  // If the web page is not currently completing a GET request, define categories and use onChange functions to
  // handle filtering (these functions call functions in App.jsx)
  // Create search bar and product grid
  return (
    <div className="home">
      <Hero/>
      <div className="categories">
        <button onClick={()=>handleChangeCategory("all-categories")} className={category == "all-categories" ? "underline category":"category"}>All Categories</button>
        <button onClick={()=>handleChangeCategory("clothing")} className={category == "clothing" ? "underline category":"category"}>Clothing</button>
        <button onClick={()=>handleChangeCategory("food")} className={category == "food" ? "underline category":"category"}>Food</button>
        <button onClick={()=>handleChangeCategory("accessories")} className={category == "accessories" ? "underline category":"category"}>Accessories</button>
        <button  onClick={()=>handleChangeCategory("tech")} className={category == "tech" ? "underline category":"category"}>Tech</button>
      </div>
      <Search setSearch={setSearch} isFetching={isFetching}/>
      <ProductGrid products={productsFiltered} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} setIsFetching={setIsFetching}/>
    </div>
  )
}

