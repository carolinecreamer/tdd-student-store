import * as React from "react"
import "./Contact.css"

export default function Contact() {
    // Create contact info section at the bottom of the web page
  return (
    <div className="contact">
      <div id="about"><h4>About Us</h4>
      <p className="contactText">The codepath student store offers great products at great prices from a great team and for a great cause.

We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.

All proceeds go towards bringing high quality CS education to college students around the country.</p>
      <h4>Contact Information</h4>
      </div>
      <div id="contact">
      <p className="contactText">Email: code@path.org</p>
      <p className="contactText">Phone: 1-800-CODEPATH</p>
      <p className="contactText">Address: 123 Fake Street, San Francisco, CA</p>
      </div>
    </div>
  )
}

