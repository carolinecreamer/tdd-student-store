import * as React from "react"
import "./Navbar.css"

export default function Navbar({ navLinks }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLinks key="NavLinks" navLinks={navLinks}/>
      </div>
    </nav>
  )
}

export function NavLinks({ navLinks }) {
  return <ul className="nav-links">
      {navLinks.map((item, idx) => 
        <NavLink key={idx} navLink={item}/>
      )}
    </ul>
}

export function NavLink({ navLink }) {
  return (
    <li className={navLink.className}>
      <i className={navLink.icon}></i>
      <span>{navLink.label}</span>
    </li>
  )
}
