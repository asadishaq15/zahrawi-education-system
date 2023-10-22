import React, { useState } from 'react';
import axios from 'axios';

function AdmissionForm() {
  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    highSchoolName: '',
    highSchoolGrade: '',
    previousSchool: '',
    previousSchoolGrade: '',
    preferredCourse: '',
    extracurricularActivities: '',
    achievements: '',
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    try {
      const response = await axios.post('http://localhost:3001/admissionform', formData);

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
      alert('Error submitting admission form.');
    }
  };

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="admission-form">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <h3>Personal Information</h3>
          <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            name="preferredCourse"
            value={formData.preferredCourse}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Preferred Course</option>
            <option value="Metric">Metric</option>
            <option value="FSc pre-Medical">FSc Pre-Medical</option>
            <option value="FSc pre-Medical">FSc Pre-Engineering</option>
            <option value="FSc pre-Medical">Hifz-e-Quran Course</option>
            <option value="FSc pre-Medical">ZIET</option>
          </select>
        </div>
       
        <h3>Academic Information</h3>
        <div className="form-group">
          <input
            type="text"
            name="highSchoolName"
            placeholder="High School Name"
            value={formData.highSchoolName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="highSchoolGrade"
            placeholder="High School Grade"
            value={formData.highSchoolGrade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="previousSchool"
            placeholder="Previous School (if applicable)"
            value={formData.previousSchool}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="previousSchoolGrade"
            placeholder="Previous School Grade (if applicable)"
            value={formData.previousSchoolGrade}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="preferredCourse"
            placeholder="Preferred Course"
            value={formData.preferredCourse}
            onChange={handleInputChange}
            required
          />
        </div>

       
        <h3>Additional Information</h3>
        <div className="form-group">
          <textarea
            name="extracurricularActivities"
            placeholder="Extracurricular Activities"
            value={formData.extracurricularActivities}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="achievements"
            placeholder="Achievements"
            value={formData.achievements}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdmissionForm;
