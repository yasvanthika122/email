import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contact from "./contact.png";

const App = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4y37uik', 'template_x1z7rfv', form.current, {
        publicKey: '85V6R-3l__jMg6e4z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          alert('Thank you for showing your interest!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-us-container">
      <div className="contact-image-container">
        <img src={contact} alt="Contact Us" />
      </div>
      <div className="contact-info">
        <h2>Phone:</h2>
        <p>+91 9842018689</p>
        <h2>Email:</h2>
        <p>ramesh@gmail.com</p>
        <h2>Address:</h2>
        <p>136/8, PK Complex, Ettimarathupatti Four Road, Annasagaram post, Dharmapuri, Tamil Nadu, 636704.</p>
        <h2>GSTIN :</h2>
        <p>33ADRFS4031R2ZF</p>
      </div>
    
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="user_name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="user_email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
        {isSubmitted && <p>Your message was sent successfully!</p>}
      </form>
      <style>
        {`
          .contact-us-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 900px;
            margin: 0 auto;
            margin-top: 80px;
            padding: 40px;
            background: #cefad0;
          }

          .contact-info {
            text-align: left;
            margin-left: 20px;
          }

          .contact-info h2 {
            margin-bottom: 5px;
          }

          .contact-info p {
            margin-bottom: 10px;
          }

          .contact-image-container img {
            max-width: 100%;
            border-radius: 10px;
            height: 300px;
          }

          .contact-form {
            width: 50%;
            text-align: left;
          }

          .contact-form label {
            font-weight: bold;
          }

          .contact-form input,
          .contact-form textarea {
            width: 100%;
            padding: 8px;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            margin-bottom: 10px;
          }

          .contact-form textarea {
            height: 100px;
          }

          .contact-form button {
            padding: 8px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
          }

          .contact-form button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default App;
