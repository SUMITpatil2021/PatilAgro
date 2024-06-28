import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignUp = ({ history }) => {

    const containerStyle = {
        backgroundColor: '#f8f8f8', // Specify the background color
        padding: '20px', // Example of adding padding
        borderRadius: '10px', // Example of adding border radius
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Example of adding box shadow.
        // margin:"auto"
      };


  const [signupData, setSignupData] = useState({
    username: { value: '', error: '', valid: false, touched: false },
    password: { value: '', error: '', valid: false, touched: false },
    confirmPassword: { value: '', error: '', valid: false, touched: false },
  });

  const validateData = (name, value) => {
    let valid = true;
    let error = '';

    if (value.trim() === '') {
      valid = false;
      error = 'This field is required.';
    } else if (name === 'password' && value.length < 6) {
      valid = false;
      error = 'Password must be at least 6 characters long.';
    } else if (name === 'confirmPassword' && value !== signupData.password.value) {
      valid = false;
      error = 'Passwords do not match.';
    }

    return { valid, error };
  };

  const handleChange = (name, value) => {
    const { valid, error } = validateData(name, value);

    setSignupData((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        valid,
        error,
        touched: true,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.keys(signupData).every((key) => signupData[key].valid);

    if (isFormValid) {
      // Handle signup logic here, e.g., call an API

      console.log('Form submitted:', {
        username: signupData.username.value,
        password: signupData.password.value,
      });

      // Redirect to sign-in page after successful signup
      history.push('/signin');
    } else {
      // Mark all fields as touched to show validation errors
      setSignupData((prevState) => {
        const updatedState = { ...prevState };
        Object.keys(updatedState).forEach((key) => {
          updatedState[key].touched = true;
        });
        return updatedState;
      });
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 " >
        <div className="form_container p-5 rounded " style={containerStyle}>
   
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="Username">Username:</label>
              <input
                type="text"
                name="username"
                id="Username"
                placeholder="Enter your username"
                className={`form-control ${signupData.username.touched && signupData.username.error ? 'is-invalid' : ''}`}
                value={signupData.username.value}
                onChange={(e) => handleChange('username', e.target.value)}
                onBlur={(e) => handleChange('username', e.target.value)}
              />
              {signupData.username.touched && signupData.username.error && (
                <div className="invalid-feedback">{signupData.username.error}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="Password">Password:</label>
              <input
                type="password"
                name="password"
                id="Password"
                placeholder="Enter your password"
                className={`form-control ${signupData.password.touched && signupData.password.error ? 'is-invalid' : ''}`}
                value={signupData.password.value}
                onChange={(e) => handleChange('password', e.target.value)}
                onBlur={(e) => handleChange('password', e.target.value)}
              />
              {signupData.password.touched && signupData.password.error && (
                <div className="invalid-feedback">{signupData.password.error}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="ConfirmPassword">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                id="ConfirmPassword"
                placeholder="Confirm your password"
                className={`form-control ${signupData.confirmPassword.touched && signupData.confirmPassword.error ? 'is-invalid' : ''}`}
                value={signupData.confirmPassword.value}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                onBlur={(e) => handleChange('confirmPassword', e.target.value)}
              />
              {signupData.confirmPassword.touched && signupData.confirmPassword.error && (
                <div className="invalid-feedback">{signupData.confirmPassword.error}</div>
              )}
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>

            <div className="form-group text-center">
              <span>
                Already have an account? <a href="/login">Sign In</a>
              </span>
            </div>
          </form>
       
      </div>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignUp;
