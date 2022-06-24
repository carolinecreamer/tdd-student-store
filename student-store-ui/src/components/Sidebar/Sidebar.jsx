import * as React from "react"
import ShoppingCart from "./ShoppingCart"
import CheckoutForm from "./CheckoutForm"
import Receipt from "./Receipt"
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, handleOnToggle, setTotal, total, success, confirmation}) {
    if (isOpen) {
      return <section className="sidebar open">
          <button onClick={()=>handleOnToggle()} className="toggle-button">Sidebar</button>
          <ShoppingCart shoppingCart={shoppingCart} products={products} isOpen={isOpen} checkoutForm={checkoutForm} 
          handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          setTotal={setTotal} total={total}/>
          <CheckoutForm isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} success={success} confirmation={confirmation}/>
          <Receipt total={total} setTotal={setTotal}/>
      </section>
    }
    else {
      return (
        <section className="sidebar closed">
          <button onClick={()=>handleOnToggle()}  className="toggle-button">Sidebar</button>
        </section>
     )
      }
}
