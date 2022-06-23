import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"

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
console.log(isOpen)
  function handleAddItemToCart(productId) {

  }

  function handleRemoveItemToCart(productId) {

  }

  function handleOnCheckoutFormChange(name, value) {

  }

  function handleOnSubmitCheckoutForm() {

  }

  function handleOnToggle() {
    if (isOpen) {
      setIsOpen(false);
    }
    else {
      setIsOpen(true);
    }
  }

  React.useEffect(()=>{
    setIsFetching(true)
    let setup = async()=>{
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/`).catch((err)=>{
        setError(err)
      })
      console.log(response.data)
      setProducts(response.data.products)
      setIsFetching(false)
    }
    setup();
  },[])

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
      <Route path ="/" element={ <main>
          <Navbar key="NavBar" navLinks={navLinks} setIsFetching={setIsFetching}/>
          <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
          <Home isFetching={isFetching} products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} setIsFetching={setIsFetching}/>
          <Footer />
        </main>}/>
        <Route path="/product/:productId" element={
          <main>
            <Navbar key="NavBar" navLinks={navLinks}/>
            <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
            <ProductDetail setIsFetching={setIsFetching} isFetching={isFetching} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
            <Footer/>
          </main>
        }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
