import * as React from "react"
import ShoppingCart from "./ShoppingCart"
import CheckoutForm from "./CheckoutForm"
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, handleOnToggle}) {
    console.log(isOpen)
    if (isOpen) {
      return <section className="sidebar open">
          <button onClick={()=>handleOnToggle()} className="toggle-button">Sidebar</button>
          <ShoppingCart />
          <CheckoutForm />
      </section>
    }
    else {
      return (
        <section className="sidebar closed">
          <button onClick={()=>handleOnToggle()} className="toggle-button">Sidebar</button>
        </section>
     )
      }
}
