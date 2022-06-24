import * as React from "react"
import "./Sidebar.css"

export default function CheckoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, 
    handleOnSubmitCheckoutForm}) {
       // {shoppingCart:shoppingCart,}
    return (
        <div className="checkout-form">
            <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" 
            value="checkoutForm.email" onChange={(e)=>handleOnCheckoutFormChange(e.target.value, "email")}></input>
            <input className="checkout-form-input" type="text" name="name" placeholder="Student Name"
            value="checkoutForm.name" onChange={(e)=>handleOnCheckoutFormChange(e.target.value, "name")}></input>
            <button className="checkout-button" onClick={()=>handleOnSubmitCheckoutForm()}>Checkout</button>
         </div>
    )
}   