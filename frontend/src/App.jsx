import axios from "axios";
import { useState } from "react";
import Input from "./components/Input";
import api from "./services/api.js";

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
    api
      .post("/submit-contact-form/", {
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
            <Input
              label="Name"
              name="name"
              required={true}
              minLength={3}
              placeholder="Jane Doe"
              handle={handleNameChange}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              required={true}
              placeholder="janedoe@email.com"
              handle={handleEmailChange}
            />
            <Input
              label="Phone"
              type="tel"
              name="phone"
              placeholder="+55 85 98765-4321"
              handle={handlePhoneChange}
            />
            <Input
              label="Subject"
              name="subject"
              placeholder="Subject"
              handle={handleSubjectChange}
            />
            <Input
              label="Message"
              name="message"
              placeholder="Message"
              handle={handleMessageChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </main>
      </div>
    </div>
  );
}
