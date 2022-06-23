import * as React from "react"
import "./ProductView.css"
import ProductCard from  "./ProductCard.jsx"

export default function NotFound({products, handleAddItemToCart, handleRemoveItemToCart, setIsFetching}) {
  return (
    <div className="product-grid">
      {/*products.map((item, idx) =>
        <ProductCard key={item.id} product={item} productId={item.id} quantity={0} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} showDescription={false} setIsFetching={setIsFetching}/>
  )*/}
    </div>
  )
}


