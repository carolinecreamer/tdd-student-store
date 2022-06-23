import * as React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Logo() {
  return (
    <div className="logo">
      <Link  to={`/`} className="media"><img src="https://miro.medium.com/fit/c/176/176/1*k8CVs8cfC0Sy7zBDxzsLkQ.png"/></Link>
    </div>
  )
}
