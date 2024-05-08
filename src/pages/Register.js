import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(process.env.REACT_APP_URL + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          active: "true",
          firstName: firstName,
          lastName: lastName,
        }),
      });

      if (response.ok) {
        alert('User registered!');
      } else {
        const data = await response.json();
        alert('Failed to register user: ' + data.error);
      }
    } catch (error) {
      console.error('Failed to register user:', error);
      alert('Failed to register user. An error occurred.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label htmlFor="username" className="mb-2">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1 mb-2"
      />

      <label htmlFor="password" className="mb-2">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1 mb-2"
        />
        
        <label htmlFor="firstName" className="mb-2">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 mb-2"
        />
        <label htmlFor="lastName" className="mb-2">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 mb-2"
        />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Register</button>
      </form>
      </div>
  );
};

export default Register;