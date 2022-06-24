import * as React from "react"
import ShoppingCart from "./ShoppingCart"
import "./Sidebar.css"

export default function Receipt({isOpen, nameVar, emailVar, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, handleOnToggle}) {
    if (isOpen) {
        return(
            <div>
                <p>Showing receipt for {nameVar} available at {emailVar}:</p>
                <ul>
                {shoppingCart.map((item, idx) => 
                    <li>{item.quantity} total {(products.find((i)=>i.id === item.itemId)).name} purchased at a cost of 
                    ${(products.find((i)=>i.id === item.itemId)).price.toFixed(2)} for a total cost of 
                    ${(((products.find((i)=>i.id === item.itemId)).price)*item.quantity).toFixed(2)}</li>
                )}
                </ul>
        </div>
        )
    }
    else {
        return(
            null
        )
    }
}
