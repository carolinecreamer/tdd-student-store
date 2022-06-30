import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Contact from "../Contact/Contact"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import Purchases from "../Purchases/Purchases"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
//import { navLinks } from "../../constants.js"
import axios from "axios"
import { useState } from "react"


export default function App() {
  // Declaring state variables
  const [products, setProducts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState("");
  const [category, setCategory] = useState("all-categories")
  const [productsFiltered, setProductsFiltered] = useState(products);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [subtotal, setSubtotal] = useState("");
  const [response, setResponse] = useState("");

  // Iterate over the array of items in the shopping cart. If the item already exists in the cart, increment its
  // quantity by one; otherwise, add the item to the cart with a quantity of one
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

  // Iterate over the shopping cart. If the item has a quantity greater than 0, decrement its quantity by one
  // If the quantity after decrementing is equal to zero, remove the item from the array of items in the 
  // shopping cart.
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

  // If the input field is the user's name, change the user's name in the checkout form state variable to the 
  // input string. If the input field is the user's email, change the user's email in the checkout form state 
  // variable to the input string.
  function handleOnCheckoutFormChange(item, type) {
    if (type == "name") {
      setCheckoutForm({"name": item, "email": checkoutForm.email})
    }
    else if (type == "email") {
      setCheckoutForm({"name": checkoutForm.name, "email": item})
    }
  }

  // Send a POST request containing the user's information (name & email) and their order (shopping cart array)
  function handleOnSubmitCheckoutForm() {
    axios.post('http://localhost:3001/store/', {
      user: checkoutForm,
      shoppingCart: shoppingCart
    })
    // If the response code is a success code, reset the shopping cart and checkout form state variables
    // Change state variables to signal to other components that the POST request was successful
    .then(function (response) {
      setResponse(response);
      setConfirmation(true);
      setSuccess(true);
      setShoppingCart([]);
      setCheckoutForm("");
      // if response = 201 output success message
    })
    .catch(function (error) {
      console.error(error);
      setConfirmation(true);
    });
  }

  // For the siderbar component, changes the isOpen state variable to determine if the sidebar is open or not
  function handleOnToggle() {
    if (isOpen) {
      setIsOpen(false);
    }
    else {
      setIsOpen(true);
    }
  }

  // Change the category state variable to filter items by category
  function handleChangeCategory(categoryName) {
    setCategory(categoryName);
  }

  // Iterate over items and only show items in selected category
  function filtered(p){
    if (category === "all-categories") {
      setProductsFiltered(p);
    }
    else {
      setProductsFiltered(p.filter((item)=>item.category === category));
    }
  }

  // Filter items by search term by filtering the items based on if they contain the search term
  function searched(p) {
    if (searched != "") {
      setProductsFiltered(p.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())));
      
    }
  }


  // Make GET request to obtain items in the store from the API
  React.useEffect(()=>{
    setIsFetching(true)

    let setup = async()=>{
      const response = await axios.get(`http://localhost:3001/store/`).catch((err)=>{
        setError(err)
      })
      filtered(response.data.products);
      setProducts(response.data.products)
      setIsFetching(false)
    }
    setup();
  },[])
  
  // Filter items by category
  React.useEffect(()=>{
    filtered(products)
  },[category])

  // Filter items by search term
  React.useEffect(()=>{
    searched(products)
  },[search])



  return (
    // Set routes to determine which components are shown when
    <div className="app">
      <BrowserRouter>
      <Routes>
      {/* Home page */}
      <Route path ="/" element={ <main>
          <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} 
                   checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                   handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} setTotal={setTotal} total={total}
                   success={success} confirmation={confirmation} response={response}/>
          <Navbar key="NavBar" handleOnToggle={handleOnToggle}/>
          <Home category = {category} isFetching={isFetching} products={products} handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemToCart={handleRemoveItemToCart} setIsFetching={setIsFetching} 
                productsFiltered={productsFiltered} handleChangeCategory={handleChangeCategory} setSearch={setSearch}/>

          <Contact id="contact"/>
          <Footer />
        </main>}/>
        {/* Product page */}
        <Route path="/product/:productId" element={
          <main>
            <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} 
                     checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                     handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} setTotal={setTotal} total={total}
                     success={success} confirmation={confirmation} response={response}/>
            <Navbar key="NavBar" handleOnToggle={handleOnToggle}/>
            <ProductDetail setIsFetching={setIsFetching} isFetching={isFetching} 
                           handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>
            <Contact/>
            <Footer/>
          </main>
        }/>

        {/* All other pages */}
        <Route path="/product/*" element={
          <main>
            <Navbar key="NavBar" handleOnToggle={handleOnToggle}/>
            <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} products={products} shoppingCart={shoppingCart} 
                     checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                     handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
            <NotFound/>
            <Contact/>
            <Footer/>
          </main>
        }/>

        <Route path="/orders" element={
          <main>
          <Navbar key="NavBar" handleOnToggle={handleOnToggle}/>
          <Sidebar  handleOnToggle={handleOnToggle} isOpen={false} products={products} shoppingCart={shoppingCart} 
                   checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
                   handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
          <Purchases purchases={purchases} setPurchases={setPurchases} isFetching={isFetching} setIsFetching={setIsFetching} setError={setError}/>
          <Contact/>
          <Footer/>
        </main>
        } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
