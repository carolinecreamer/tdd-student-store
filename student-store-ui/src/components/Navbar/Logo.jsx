import * as React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Logo() {
  return (
    // Create a logo that uses a Link tag to route the user back to the homepage if the user clicks on the logo
    <div className="logo">
      <Link  to={`/`} className="media"><img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/></Link>
    </div>
  )
}
