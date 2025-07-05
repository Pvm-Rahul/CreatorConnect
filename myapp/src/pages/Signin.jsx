import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'creator',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Login Attempt:', formData); // Backend call to verify login just for initial test

    const { role } = formData;

    // Redirect based on role
    if (role === 'creator') {
      navigate('/dashboard/creator');
    } else if (role === 'editor') {
      navigate('/dashboard/editor');
    } else if (role === 'writer') {
      navigate('/dashboard/writer');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

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

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
