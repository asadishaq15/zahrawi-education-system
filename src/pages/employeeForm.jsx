import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
function EmployeeForm() {
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
    cvFile: null, // New field for CV file
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // State to manage the file name for display
  const [cvFileName, setCVFileName] = useState('');
  

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop, // Move this below the onDrop function declaration
    accept: '.pdf,.doc,.docx', // Define the accepted file types
  });
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);

    const dataToSend = formData;

    try {
      console.log(formData)
      const response = await axios.post(
        'https://zahrawieducation-60e4fd66f6b9.herokuapp.com/employeeform',
        dataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response status:', response.status);
      console.log('Selected File:', selectedFile);
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
      alert('Error submitting employee form.');
    }
  };

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'cvFile') {
      // Handle file input separately
      if (files && files.length > 0) {
        setSelectedFile(files[0]); // Update selected file
        setCVFileName(files[0].name); // Update the displayed file name
        setFormData({
          ...formData,
          cvFile: files[0], // Update the cvFile property
        });
      }
    } else {
      // Handle text inputs
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  console.log('Form Data:', formData);

  
  return (
    <div className="employee-form">
      <h2>Job Application</h2>
      <form action='/employeeform' method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
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

        {/* Employment Information */}
        <h3>Employment Information</h3>
        <div className="form-group">
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          >
            <option value="Select Department" disabled>
              Select Department
            </option>
            <option value="Administration">Administration</option>
            <option value="Teaching">Teaching</option>
            <option value="Support">Support</option>
          </select>
          <select
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            required
          >
            <option value="Select Position" disabled>
              Select Position
            </option>
            <option value="Professor">Professor</option>
            <option value="Administrator">Administrator</option>
            <option value="Counselor">Counselor</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            name="experience"
            placeholder="Experience (if any)"
            value={formData.experience}
            onChange={handleInputChange}
          />
        </div>

       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;






