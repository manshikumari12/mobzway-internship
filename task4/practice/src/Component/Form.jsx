import React, { useState } from 'react';

const Form = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!formData.firstName.trim()) {
      formErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      formErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
    }
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // Form data is valid, can submit the form or perform other actions
      setSubmittedData(formData);
      console.log(formData);
      setFormData({ ...initialFormData }); // Reset the form data
    }
  };

  const handleReset = () => {
    setFormData({ ...initialFormData });
    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
        </div>
      )}
    </>
  );
};

export default Form;
