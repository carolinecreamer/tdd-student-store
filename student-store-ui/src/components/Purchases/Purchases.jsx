import * as React from "react"
import "./Purchases.css"
import axios from "axios"

export default function Purchases({purchases, setPurchases, isFetching, setIsFetching, setError}) {
    React.useEffect(()=> {
        setIsFetching(true);

        let getPurchases = async()=>{
            const response = await axios.get(`http://localhost:3001/store/orders`).catch((err)=>{
                setError(err);
            })
            console.log(response)
            setPurchases(response.data.purchases)
          }
          setIsFetching(false);
          getPurchases();
    },[])

console.log(purchases);
  // Iterate over the items and create a product card for each utilizing the Product Card component to create a grid
  if (isFetching) {
    return null;
  }
  return (
    <div className="purchases">
      {purchases.map((purchase) =>
       <div className="purchase"> 
        <p>Name: {purchase.name}</p>
        <p>Email: {purchase.email}</p>
        <p>Total: {purchase.total}</p>
         {purchase.receipt != "" ? <div><p>{purchase.receipt[0]}</p>
             <ul>
               {purchase.receipt.map((item,idx) =>
                 idx!=0?<li>{item}</li>:null
               )}
             </ul></div>: null
        }
        </div>
      )}
    </div>
  )
}