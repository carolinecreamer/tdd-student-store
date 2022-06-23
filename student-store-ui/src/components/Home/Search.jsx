import * as React from "react"
import ProductGrid from "../ProductDetail/ProductGrid"
import Hero from "./Hero"
import "./Home.css"

export default function Search({setSearch, isFetching}) {
  if(isFetching){
    return null;
  }
  return (
    <input onKeyUp={(e)=>setSearch(e.target.value)} type="text" className="search-input" name="search-input" placeholder="Search"/>
  )
}