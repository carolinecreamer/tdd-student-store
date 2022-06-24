import * as React from "react"
import "./ShoppingCart.css"

export default function Sidebar({isOpen, products, shoppingCart}) {
    if (shoppingCart.length == 0) {
        return (
            <p className="notification">No items added to cart yet. Start shopping now!</p>
        )
    }
    else {
    return (
        <div className="shopping-cart">
            {shoppingCart.map((item, idx) => 
                <div>
                    <span className="cart-product-name">{(products.find((i)=>i.id === item.itemId)).name}</span>
                    <span className="cart-product-quantity">{item.quantity}</span>
                    <span className="cart-product-unit-price">${(products.find((i)=>i.id === item.itemId)).price.toFixed(2)}</span>
                    <span className="cart-product-unit-price">${(((products.find((i)=>i.id === item.itemId)).price)*item.quantity).toFixed(2)}</span>
                </div>
            )}
        </div>
        )
    }
}
