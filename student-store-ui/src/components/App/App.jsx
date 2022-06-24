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
  const [search, setSearch] = useState("");

  console.log(shoppingCart)
  function handleAddItemToCart(productId) {
    let found = false;
    shoppingCart.forEach((item)=>{
      if (item.itemId === productId) {
        item.quantity++;
        found = true;
      }
    });

    if (!found) {
      let newItem = {"itemId": productId, "quantity": 1};
      setShoppingCart((previousArray)=>[...previousArray, newItem]);
      return
    }
    setShoppingCart([...shoppingCart])
  }

  function handleRemoveItemToCart(productId) {
    shoppingCart.forEach((item, idx)=>{
      if (item.itemId === productId) {
        if (item.quantity > 0) {
          item.quantity--;
        }
        if (item.quantity == 0) {
          shoppingCart.splice(idx,1)
          setShoppingCart([...shoppingCart])
        }
      }
    });
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

  function handleSearch(search) {
    setSearch(search);
  }

  function searched(p) {
    if (searched != "") {
      setProductsFiltered(p.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())));
    }
  }

  React.useEffect(()=>{
    setIsFetching(true)

    let setup = async()=>{
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/`).catch((err)=>{
        setError(err)
      })
      filtered(response.data.products)
      setProducts(response.data.products)
      setIsFetching(false)
    }
    setup();
  },[])
  
  React.useEffect(()=>{
    filtered(products)
  },[category])

  React.useEffect(()=>{
    searched(products)
  },[search])

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
      <Route path ="/" element={ <main>
          <Navbar key="NavBar" navLinks={navLinks} setIsFetching={setIsFetching}/>
          <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} 
                   checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                   handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
          <Home isFetching={isFetching} products={products} handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemToCart={handleRemoveItemToCart} setIsFetching={setIsFetching} 
                productsFiltered={productsFiltered} handleChangeCategory={handleChangeCategory} setSearch={setSearch}/>
          <Footer />
        </main>}/>
        <Route path="/product/:productId" element={
          <main>
            <Navbar key="NavBar" navLinks={navLinks}/>
            <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} 
                     checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                     handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
            <ProductDetail setIsFetching={setIsFetching} isFetching={isFetching} 
                           handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
            <Footer/>
          </main>
        }/>
        <Route path="/product/*" element={
          <main>
            <Navbar key="NavBar" navLinks={navLinks}/>
            <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} 
                     checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                     handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
            <NotFound/>
            <Footer/>
          </main>
        }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
