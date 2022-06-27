import * as React from "react"
import "./Contact.css"

export default function Contact() {
    // Create contact info section at the bottom of the web page
  return (
    <div className="contact">
      <p className="contactText">Email: code@path.org</p>
      <p className="contactText">Phone: 1-800-CODEPATH</p>
      <p className="contactText">Address: 123 Fake Street, San Francisco, CA</p>
    </div>
  )
}

