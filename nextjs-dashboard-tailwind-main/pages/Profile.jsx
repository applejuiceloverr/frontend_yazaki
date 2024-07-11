import React, { useState } from 'react';
import Image from 'next/image';
import profilePic from '../images/profile.jpg';
import Header from '../components/Header';
import ChangePasswordModal from '../components/ChangePasswordModal';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='relative w-full min-h-screen bg-zinc-900/90'>
      <Header />
      <div className='flex justify-center items-center h-full pt-16'>
        <div className='max-w-[600px] w-full mx-auto bg-white p-8 rounded-lg shadow-2xl transition-transform transform hover:scale-105 duration-300'>
          <div className='flex flex-col items-center'>
            <div className='relative w-32 h-32 mb-4'>
              <Image
                src={profilePic}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className='rounded-full shadow-lg'
              />
            </div>
            <h2 className='text-4xl font-bold mb-2 text-gray-800'>John Doe</h2>
            <p className='text-gray-600 mb-4'>johndoe@example.com</p>
            <button
              onClick={handleOpenModal}
              className='px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300'
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
      <ChangePasswordModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Profile;
