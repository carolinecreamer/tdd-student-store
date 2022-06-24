import * as React from "react"
import ShoppingCart from "./ShoppingCart"
import CheckoutForm from "./CheckoutForm"
import Receipt from "./Receipt"
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, handleOnToggle, setTotal, total, success, confirmation, setSubtotal, subtotal, response}) {
    if (isOpen) {
      return <section className="sidebar open">
          <button onClick={()=>handleOnToggle()} className="toggle-button">Sidebar</button>
          <ShoppingCart shoppingCart={shoppingCart} products={products} isOpen={isOpen} checkoutForm={checkoutForm} 
          handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          setTotal={setTotal} total={total} setSubtotal={setSubtotal}/>
          <CheckoutForm isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} success={success} confirmation={confirmation}/>
          {response != "" ? <ul>
            {response.data.purchase.receipt.lines.map((item) =>
              <li>{item}</li>
            )}
          </ul> : null}
          
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
