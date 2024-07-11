import React, { useState } from 'react';
import Image from 'next/image';
import bg1 from '../images/bg1.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTouched, setIsTouched] = useState({ email: false, password: false });

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = isValidEmail(email) && password.trim() !== '';

  const handleBlur = (field) => () => {
    setIsTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
      <Image
        src={bg1}
        alt="Background"
        fill
        className='absolute object-cover mix-blend-overlay z-10'
      />
      <div className='flex justify-center items-center h-full z-20 relative'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='text-4xl font-bold text-center py-4'>YAZAKI</h2>
          <div className='flex flex-col mb-4'>
            <label>Email</label>
            <input
              className={`border relative bg-gray-100 p-2 ${!isValidEmail(email) && isTouched.email ? 'border-red-500' : ''}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur('email')}
            />
          </div>
          <div className='flex flex-col '>
            <label>Password</label>
            <input
              className={`border relative bg-gray-100 p-2 ${!password && isTouched.password ? 'border-red-500' : ''}`}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleBlur('password')}
            />
          </div>
          <button
            className={`w-full py-3 mt-8 ${isFormValid ? 'bg-red-600 hover:bg-red-500 cursor-pointer' : 'bg-red-300 cursor-not-allowed'} relative text-white`}
            disabled={!isFormValid}
          >
            Sign In
          </button>
          <p className='flex items-center mt-2'>
            <input className='mr-2' type="checkbox" /> Remember Me
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
