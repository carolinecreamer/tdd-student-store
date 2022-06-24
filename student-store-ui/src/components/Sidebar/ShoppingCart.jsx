import * as React from "react"
import "./ShoppingCart.css"

export default function Sidebar({isOpen, products, shoppingCart}) {
    let cost = 0;
    shoppingCart.map((item, idx) => 
        cost += (products.find((i)=>i.id === item.itemId)).price * item.quantity
    )

    if (shoppingCart.length == 0) {
        return (
            <p className="notification">No items added to cart yet. Start shopping now!</p>
        )
    }
    else {
    return (
        <div className="shopping-cart">
            {shoppingCart.map((item, idx) => 
                <div key={idx}>
                    <span className="cart-product-name">{(products.find((i)=>i.id === item.itemId)).name}</span>
                    <span className="cart-product-quantity">{item.quantity}</span>
                    <span className="cart-product-unit-price">${(products.find((i)=>i.id === item.itemId)).price.toFixed(2)}</span>
                    <span className="cart-product-unit-price">${(((products.find((i)=>i.id === item.itemId)).price)*item.quantity).toFixed(2)}</span>
                </div>
            )}

            <div className="subtotal">
                <span>Subtotal</span>
                <span>${cost.toFixed(2)}</span>
            </div>
            <div>
                <span>Taxes and Fees</span>
                <span>${(cost*0.0875).toFixed(2)}</span>
            </div>
            <div>
                <span>Total</span>
                <span>${(cost + (cost * 0.0875)).toFixed(2)}</span>
            </div>
        </div>
        )
    }
}
