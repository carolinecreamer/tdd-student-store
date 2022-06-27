import * as React from "react"
import ShoppingCart from "./ShoppingCart"
import CheckoutForm from "./CheckoutForm"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./Sidebar.css"

// If the sidebar is open, update its class name to determine display and show the shopping cart and checkout form
// If the sidebar is closed, update its class name to hide the shopping cart and checkout form
export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, handleOnToggle, setTotal, total, success, confirmation, response}) {
    if (isOpen) {
      return <section className="sidebar open">
          <button onClick={()=>handleOnToggle()} className="toggle-button"><AiOutlineArrowLeft/></button>
          <ShoppingCart shoppingCart={shoppingCart} products={products} isOpen={isOpen} checkoutForm={checkoutForm} 
          handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          setTotal={setTotal} total={total}/>
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
          <button onClick={()=>handleOnToggle()} className="toggle-button"><AiOutlineArrowRight/></button>
        </section>
     )
      }
}
