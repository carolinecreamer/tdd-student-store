import * as React from "react"
import "./Sidebar.css"

export default function ShoppingCart({shoppingCart, products, setTotal, total}) {
    // Iterate over the items in the shopping cart in order to calculate the cost of the order
    let cost = 0;
    shoppingCart.map((item, idx) => 
        cost += (products.find((i)=>i.id === item.itemId)).price * item.quantity
    )

    // Add tax
    setTotal((cost + (cost * 0.0875)).toFixed(2))

    // If there aren't items in the cart, output a message signaling for the user to add items to the cart
    if (shoppingCart.length == 0) {
        return (
            <p className="notification">No items added to cart yet. Start shopping now!</p>
        )
    }
    // Display the items and cost of the order
    else {
    return (
        <>
        <div className="shopping-cart">
            {shoppingCart.map((item, idx) => 
                <>
                    <span key={idx} className="cart-product-name">{(products.find((i)=>i.id === item.itemId)).name}</span>
                    <span key={idx} className="cart-product-quantity">{item.quantity}</span>
                    <span key={idx} className="cart-product-unit-price">${(products.find((i)=>i.id === item.itemId)).price.toFixed(2)}</span>
                    <span key={idx} className="cart-product-unit-price">${(((products.find((i)=>i.id === item.itemId)).price)*item.quantity).toFixed(2)}</span>
                </>
            )}   </div>

            <div className="subtotal">
                <span>Subtotal</span>
                <span>${cost.toFixed(2)}</span>
            </div>
            <div>
                <span>Taxes and Fees</span>
                <span>${(cost*0.0875).toFixed(2)}</span>
            </div>
            <div className="total-price">
                <span>Total</span>
                <span>${total}</span>
            </div>
     
        </>
        )
    }
}
