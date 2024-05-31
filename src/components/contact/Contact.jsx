import React, { useState } from "react";
import "./contact.scss";

function Contact() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(true);
    console.log(email, text);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="The Shake Image" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Email"
            required
          />
          <textarea
            placeholder="Message"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
        {message && <span>Thanks, I'll reply ASAP</span>}
      </div>
    </div>
  );
}

export default Contact;
