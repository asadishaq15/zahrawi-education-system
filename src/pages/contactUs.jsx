import React, { useState } from 'react';
import axios from 'axios';

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    try {
      const response = await axios.post('https://zahrawieducation-60e4fd66f6b9.herokuapp.com/contact-form', formData);

      console.log('Response status:', response.status);

      const data = response.data;

      if (data.status === 422 || !data) {
        window.alert('Form submission unsuccessful');
        console.log('Invalid form submission');
      } else {
        alert('Form submitted successfully');
        console.log('Successful submission');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting contact us form.');
    }
  };

  return (
    <div className="contact-us-form responsive-margin">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-group " >
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '70%' }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUsForm;
