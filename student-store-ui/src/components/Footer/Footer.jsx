import * as React from "react"
import "./Footer.css"

export default function Footer(props) {
  // Create footer at the bottom of the web page 
  return (
    <div className="footer">
      <p className="description"> About Us </p>
      <p className="description"> Find a Store </p>
      <p className="description"> Terms </p>
      <p className="description"> Sitemap </p>
      <p className="description"> Careers </p>
    </div>
  )
}

