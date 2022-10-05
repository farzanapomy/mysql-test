import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegister = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', inputs);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleRegister}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleRegister}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleRegister}
        />
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have any account? <Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
