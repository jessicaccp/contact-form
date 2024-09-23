import FormField from "./FormField";
import { useState } from "react";
import api from "../services/api";

const Form = ({ setError, setSuccess }) => {
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
      .post("/submit/", {
        name,
        email,
        phone,
        subject,
        message,
      })
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        setSuccess(false);
        setError(error);
      });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        required={true}
        autofocus={true}
        minLength={3}
        placeholder="Jane Doe"
        handle={handleNameChange}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        required={true}
        placeholder="jane.doe@mail.com"
        handle={handleEmailChange}
      />
      <FormField
        label="Phone"
        type="tel"
        name="phone"
        placeholder="+55 85 98765-4321"
        handle={handlePhoneChange}
      />
      <FormField
        label="Subject"
        name="subject"
        required={true}
        placeholder="I have a question about..."
        handle={handleSubjectChange}
      />
      <FormField
        label="Message"
        name="message"
        rows={3}
        required={true}
        placeholder="Please, I would like to know more about..."
        handle={handleMessageChange}
      />
      <input
        type="submit"
        value="Submit"
        className="mt-2 p-2 bg-pink-600 hover:bg-pink-800 active:bg-pink-400 text-white rounded cursor-pointer"
      />
    </form>
  );
};

export default Form;
