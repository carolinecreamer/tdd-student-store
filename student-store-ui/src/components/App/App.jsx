import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductCard from "../ProductDetail/ProductCard"
import ProductGrid from "../ProductDetail/ProductGrid"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import { navLinks } from "../../constants.js"
import axios from "axios"
import { useState } from "react"


export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState("");

  function handleAddItemToCart() {

  }

  function handleRemoveItemToCart() {

  }

  React.useEffect(()=>{
    setIsFetching(true)
    let setup = async()=>{
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store`).catch((err)=>{
        setError(err)
      })
      console.log(response.data)
      setProducts(response.data.products)
      setIsFetching(false)
    }
    setup();
  },[])
if(isFetching){
  return <div>Loading...</div>
}
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
      <Route path ="/" element={ <main>
          <Navbar key="NavBar" navLinks={navLinks}/>
          <Sidebar />
          <Home />
          <ProductGrid products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
          <NotFound />
          <Footer />
        </main>}/>
        <Route path="/products/:productId" element={
          <ProductCard/>
        }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
