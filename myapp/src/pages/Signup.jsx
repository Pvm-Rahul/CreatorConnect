import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'creator',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Data:', formData); // Replace with API call in backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        >
          <option value="creator">Content Creator</option>
          <option value="editor">Video Editor</option>
          <option value="writer">Content Writer</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
