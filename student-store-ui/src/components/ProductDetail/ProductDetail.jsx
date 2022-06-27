import { useEffect, useState } from "react";
import "./ProductView.css"
import { useParams } from "react-router-dom"
import ProductView from "./ProductView";
import axios from "axios";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail( {handleAddItemToCart, handleRemoveItemToCart, setIsFetching, isFetching}) {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState("");
    // Make a GET request to get the unique product's information from the API
    // Display the product's Product View component or show the Not Found component if the item doesn't exist
    const params = useParams();
    params.productId;;
    useEffect(()=>{
        let setup = async()=>{
          const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${params.productId}`).catch((err)=>{
            setError(err)
          })
          setProduct(response.data.product)
          setIsFetching(false)
        }
        setup();
      },[])
      if (isFetching) {
        return <h1 className="product-id">Loading...</h1>
      }
    if(product) {
        return (
            <div className="product-detail">
                <ProductView product={product} productId={product.id} quantity={0} 
                handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} 
                showDescription={true}/>
            </div>
        )
    }
    else {
        return (
            <NotFound/>
        )
    }
}

