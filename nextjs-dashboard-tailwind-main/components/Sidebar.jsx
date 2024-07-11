import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';
import { FaBox, FaHistory, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-[#383A45] border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-red-600 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} className='text-red-600' />
            </div>
          </Link>
          <Link href='/Assets'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaBox size={20} className='text-red-600' />
            </div>
          </Link>
          <Link href='/History'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaHistory size={20} className='text-red-600' />
            </div>
          </Link>
          <Link href='/Profile'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaUser size={20} className='text-red-600' />
            </div>
          </Link>
          <Link href='/logout'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FaSignOutAlt size={20} className='text-red-600' />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
