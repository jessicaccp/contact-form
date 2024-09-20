import axios from "axios";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/contactform", {
        name,
        email,
        phone,
        subject,
        message,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className="flex flex-col w-1/2">
        <header>
          <h1>Contact Form</h1>
        </header>
        <main>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={3}
              placeholder="Jane Doe"
              onChange={handleNameChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="janedoe@email.com"
              onChange={handleEmailChange}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+55 85 98765-4321"
              onChange={handlePhoneChange}
            />
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              onChange={handleSubjectChange}
            />
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Message"
              onChange={handleMessageChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </main>
      </div>
    </div>
  );
}
