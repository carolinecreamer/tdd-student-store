import * as React from "react"
import "./Navbar.css"
import Logo from "./Logo"

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

export function NavLinks({ navLinks }) {
  return <div className="nav-links">
      {navLinks.map((item, idx) => 
        <NavLink key={idx} className="link" navLink={item}/>
      )}
    </div>
}

export function NavLink({ navLink }) {
  return (
    <span className={navLink.className}>
      <i className={navLink.icon}></i>
      <span>{navLink.label}</span>
    </span>
  )
}
