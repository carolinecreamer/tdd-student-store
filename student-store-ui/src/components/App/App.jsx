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
  const [category, setCategory] = useState("all-categories")
  const [productsFiltered, setProductsFiltered] = useState(products);

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

  function handleChangeCategory(categoryName) {
    setCategory(categoryName);


  }
  function filtered(p){
    if (category === "all-categories") {
      setProductsFiltered(p);
    }
    else {
      setProductsFiltered(p.filter((item)=>item.category === category));
    }
  }

  React.useEffect(()=>{
    setIsFetching(true)

    let setup = async()=>{
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/`).catch((err)=>{
        setError(err)
      })
      console.log(response.data)
      filtered(response.data.products)
      setProducts(response.data.products)

      setIsFetching(false)
    }
    setup();
  },[])
  
  React.useEffect(()=>{
    filtered(products)
  },[category])

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
      <Route path ="/" element={ <main>
          <Navbar key="NavBar" navLinks={navLinks} setIsFetching={setIsFetching}/>
          <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
          <Home isFetching={isFetching} products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} setIsFetching={setIsFetching} productsFiltered={productsFiltered} handleChangeCategory={handleChangeCategory}/>
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
        <Route path="/product/*" element={
          <main>
            <Navbar key="NavBar" navLinks={navLinks}/>
            <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
            <NotFound/>
            <Footer/>
          </main>
        }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
