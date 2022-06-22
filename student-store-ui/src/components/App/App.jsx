import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductView"
import NotFound from "../NotFound/NotFound"
import Footer from "../Footer/Footer"
import {BrowserRouter} from "react-router-dom"
import "./App.css"
import { navLinks } from "../../constants.js"
import axios from "axios"
import { useState } from "react"


export default function App() {
  const [data, setData] = useState("");
  React.useEffect(()=>{
    let setup = async()=>{
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store`)
      console.log(response.data)
      setData(response.data)
    }
    setup();
  },[])
  return (
    <div className="app">
      <BrowserRouter>
       <main>
          <Navbar key="NavBar" navLinks={navLinks}/>
          <Sidebar />
          <Home />
          <ProductDetail/>
          <NotFound />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
