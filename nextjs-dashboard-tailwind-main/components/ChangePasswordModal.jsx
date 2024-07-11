import React, { useState } from 'react';

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = (password) => {
    // Add your password complexity check here
    const complexityCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return complexityCheck.test(password);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include a number, a lowercase letter, and an uppercase letter');
    } else {
      setError('');
      // Handle password change logic here
      console.log('Password changed successfully');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-lg"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg"
        >
          Change Password
        </button>
        <button
          onClick={onClose}
          className="w-full py-2 mt-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
