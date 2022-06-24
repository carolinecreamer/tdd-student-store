import * as React from "react"
import "./Sidebar.css"

export default function CheckoutForm({checkoutForm, handleOnCheckoutFormChange, 
    handleOnSubmitCheckoutForm, success, confirmation}) {
    return (
        <div className="checkout-form">
            <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" 
            value={checkoutForm.email} onChange={(e)=>handleOnCheckoutFormChange(e.target.value, "email")}></input>
            <input className="checkout-form-input" type="text" name="name" placeholder="Student Name"
            value={checkoutForm.name} onChange={(e)=>handleOnCheckoutFormChange(e.target.value, "name")}></input>
            <button className="checkout-button" onClick={()=>handleOnSubmitCheckoutForm()}>Checkout</button>
            {(success && confirmation) ? <p className="success">Your order has been confirmed!</p> : null}
            {((!success) && confirmation) ? <p className="error">Error! Please try again later.</p> : null}
         </div>
    )
}   