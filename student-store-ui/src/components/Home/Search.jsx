import * as React from "react"
import ProductGrid from "../ProductDetail/ProductGrid"
import Hero from "./Hero"
import "./Home.css"

export default function Search({setSearch, isFetching}) {
  // If the user types a search term into the search bar, call functions in App.jsx to handle behavior
  if(isFetching){
    return null;
  }
  return (
    <input onKeyUp={(e)=>setSearch(e.target.value)} type="text" className="search-input" name="search-input" placeholder="Search"/>
  )
}