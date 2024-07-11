import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSettings } from 'react-icons/fi';
import profilePic from '../images/profile.jpg';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const routeName = router.pathname.substring(1) || 'Dashboard';

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className='flex justify-between items-center px-4 py-4 bg-gray-800 shadow-lg'>
      <h2 className='font-roboto text-2xl text-red-600'>{capitalize(routeName)}</h2>
      <div className='flex items-center space-x-4'>
        <Link href="/Profile">
          <div className='relative w-10 h-10 cursor-pointer'>
            <Image
              src={profilePic}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className='rounded-full'
            />
          </div>
        </Link>
        <h2 className='font-roboto text-lg text-white'>Test Test</h2>
        <Link href="/Profile">
          <FiSettings className='text-white text-2xl cursor-pointer hover:text-red-600 transition duration-300' />
        </Link>
      </div>
    </div>
  );
};

export default Header;
