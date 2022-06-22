import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Header from "../Header/Header"
import Banner from "../Banner/Banner"
import Search from "../Search/Search"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import {BrowserRouter} from "react-router-dom"
import "./App.css"
import { navLinks } from "../../constants.js"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
       <main>
          <Header />
          <Banner />
          <Search />
          <Navbar key="NavBar" navLinks={navLinks}/>
          <Sidebar />
          <Home />
          <About key="About"/>
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
