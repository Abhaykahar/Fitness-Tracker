import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({ email, password }); 
      toast.success('Signup successful!');
      navigate('/login'); 
    } catch (error) {
      toast.error('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm md:max-w-md" style={{ maxWidth: '500px' }}>
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-black text-white w-full py-2 rounded hover:bg-red-600 transition duration-200">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-sm">Already have an account? </span>
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
