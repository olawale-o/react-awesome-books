import React from 'react'

const Contact = ({ toggle }) => {
    return (
      <div className={ toggle === 3 ? "contacts": "contacts hide" } id="contacts">
        <h2>Contact information</h2>
        <p className="contact_p">Do you have any questions or you just want to say "Hello"?</p>
        <p className="contact_p">You can reach out to us!</p>
        <ul>
          <li>Our email: <a href="mailto:support@awesomebooks.com">support@awesomebooks.com</a></li>
          <li>Our phone number: <a href="tel:0013586534422">0013586534422</a></li>
          <li>Our address: Wall Street 77, 84503 New York, USA</li>
        </ul>
      </div>
    )
}

export default Contact;
