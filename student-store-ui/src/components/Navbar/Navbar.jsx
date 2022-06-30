import * as React from "react"
import "./Navbar.css"
import Logo from "./Logo"
import {Link} from "react-router-dom"

// Define a navigation bar and instantiate its navigation links
export default function Navbar({ handleOnToggle }) {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Logo />
  
        <span className="nav-link active">
        <Link  to={`/`} className="media"><i className="fas fa-home"></i>
          <span className="nav-links">Home</span></Link>
        </span>

        <span className="nav-link">
          <a href="#about"><i className="fas fa-bolt"></i>
          <span className="nav-links">About Us</span></a>
        </span>

        <span className="nav-link">
          <a href="#contact"><i className="far fa-envelope"></i>
          <span className="nav-links">Contact Us</span></a>
        </span>
 
        <span className="nav-link">
          <a onClick={()=>handleOnToggle()}><i className="far fa-bell"></i>
          <span className="nav-links">Buy Now</span></a>
        </span>
      </div>
    </div>
  )
}

/*// Iterate over all of the links to instantiate each of them
export function NavLinks({ navLinks }) {
  return <div className="nav-links">
      {navLinks.map((item, idx) => 
        <NavLink key={idx} className="link" navLink={item}/>
      )}
    </div>
}

// Define a navigation link
export function NavLink({ navLink }) {
  return (
    <span className={navLink.className}>
      <i className={navLink.icon}></i>
      <span>{navLink.label}</span>
    </span>
  )
}
*/