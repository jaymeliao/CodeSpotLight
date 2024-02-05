import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage({ handleLoginAfterSignup }) {

  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newAccount = {
        username: event.target.username.value,
        email:event.target.email.value,
        password: event.target.password.value,
      }
      const response = await axios.post('http://localhost:8080/signup',newAccount );
      console.log('Signup successful', response.data);
      await handleLoginAfterSignup(newAccount.username, newAccount.password);
      navigate('/'); 

    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 409) {
        setError(err.response.data.error || "Username or email already exist. Try Forget Password");
      } else {
        console.error(
          err.response?.data?.message || "Automatic login after signup failed"
        );
        setError("Automatic login after signup failed");
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
          />
        </div>
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default SignupPage;
