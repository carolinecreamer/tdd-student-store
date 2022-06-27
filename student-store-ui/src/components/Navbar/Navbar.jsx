import * as React from "react"
import "./Navbar.css"
import Logo from "./Logo"

// Define a navigation bar and instantiate its navigation links
export default function Navbar({ navLinks}) {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Logo />
        <NavLinks key="NavLinks" navLinks={navLinks}/>
      </div>
    </div>
  )
}

// Iterate over all of the links to instantiate each of them
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
