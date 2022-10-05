import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegister = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have any account? <Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
