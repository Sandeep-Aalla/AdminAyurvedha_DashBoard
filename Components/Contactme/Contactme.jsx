import React, { useState } from 'react';
import './Contactme.css';
import {Link} from 'react-router-dom';
 import emailjs from 'emailjs-com';

export default function Contactme() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // New state variable

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.description) {
      newErrors.description = 'Description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_t1pmnwa', 'template_ol85skg', e.target, 'ST0oGhy6WDD7x0-29')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();

    if (validateForm()) {
      // Update the state to indicate that the form has been submitted
      setSubmitted(true);
    }
  };

  return (
    <div className="App3">
   
      <div className="cont1">
      <Link to="/">
          <button className="buttonBack">Back</button>
        </Link>
        <h1 className="head1">We Love To Hear you</h1>
        <div className="cont3">
          <h1>Ayurveda</h1>
          <p>is practiced in its most authentic and pure form.</p>
        </div>
      </div>
      <div className="box">
        <div className="inbox1">
          <h1>Send Me A Message</h1>

          {submitted ? ( // Display the thank you message if the form has been submitted
            <div className="thank-you-message">
              Thank you for contacting us, we will reach you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="inbox2">
                <div>
                  <label>Name:</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                  <label>Description:</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  {errors.description && <span>{errors.description}</span>}
                </div>
                <button type="submit" className='btn btn btn-primary border w-100 '>Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
