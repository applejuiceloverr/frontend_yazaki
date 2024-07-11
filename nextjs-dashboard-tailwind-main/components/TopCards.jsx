import React from 'react';
import { FaBox, FaExclamationTriangle, FaThList } from 'react-icons/fa';

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>230 assets</p>
          <p className='text-gray-600'>Total assets</p>
        </div>
        <div className='flex justify-center items-center p-2 rounded-lg'>
          <FaBox className='text-blue-600 text-3xl' />
        </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>4 alerts!</p>
          <p className='text-gray-600'>Total alerts</p>
        </div>
        <div className='flex justify-center items-center p-2 rounded-lg'>
          <FaExclamationTriangle className='text-red-600 text-3xl' />
        </div>
      </div>
      <div className='bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>23 categories</p>
          <p className='text-gray-600'>Total categories</p>
        </div>
        <div className='flex justify-center items-center p-2 rounded-lg'>
          <FaThList className='text-green-600 text-3xl' />
        </div>
      </div>
    </div>
  );
};

export default TopCards;
