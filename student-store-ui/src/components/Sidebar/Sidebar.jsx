import * as React from "react"
import ShoppingCart from "./ShoppingCart"
import CheckoutForm from "./CheckoutForm"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./Sidebar.css"

// If the sidebar is open, update its class name to determine display and show the shopping cart and checkout form
// If the sidebar is closed, update its class name to hide the shopping cart and checkout form
export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, handleOnToggle, setTotal, total, success, confirmation, response}) {
    console.log(response);
    if (isOpen) {
      return <section className="sidebar open">
          <button onClick={()=>handleOnToggle()} className="toggle-button"><AiOutlineArrowLeft/></button>
          <ShoppingCart shoppingCart={shoppingCart} products={products} isOpen={isOpen} checkoutForm={checkoutForm} 
          handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          setTotal={setTotal} total={total}/>
          <CheckoutForm isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} success={success} confirmation={confirmation}/>
          {response != "" ? <div><p>{response.data.purchase.receipt[0]}</p>
          <ul>
            {response.data.purchase.receipt.map((item,idx) =>
              idx!=0?<li>{item}</li>:null
            )}
          </ul></div>: null}
          
      </section>
    }
    else {
      return (
        <section className="sidebar closed">
          <button onClick={()=>handleOnToggle()} className="toggle-button"><AiOutlineArrowRight/></button>
        </section>
     )
      }
}
