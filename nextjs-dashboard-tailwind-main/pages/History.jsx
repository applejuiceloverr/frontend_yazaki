import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import Header from '../components/Header';

const placeholderData = [
  {
    asset: 'Laptop',
    assigned: 'Alice Johnson',
    profile: 'Engineering',
    date: '2023-07-01',
  },
  {
    asset: 'Mobile Phone',
    assigned: 'Bob Smith',
    profile: 'Marketing',
    date: '2023-06-21',
  },
  {
    asset: 'Desktop Computer',
    assigned: 'Charlie Brown',
    profile: 'Design',
    date: '2023-05-15',
  },
  {
    asset: 'Tablet',
    assigned: 'Dana White',
    profile: 'Sales',
    date: '2023-07-07',
  },
];

const History = () => {
  return (
    <div className='bg-[#9b9ca2] min-h-screen'>
      <Header />
      <div className='p-4'>
        <div className='flex justify-between mb-4'>
          <input
            type='text'
            placeholder='Search by Asset'
            className='p-2 rounded-lg border border-gray-300'
          />
          <button
            className='bg-red-200 text-black p-2 rounded-lg'
          >
            Order Alphabetically
          </button>
        </div>
        <div className='w-full m-auto p-4 border rounded-lg bg-gray-200 overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Asset</span>
            <span className='sm:text-left text-right'>Assigned</span>
            <span className='hidden md:grid'>Profile</span>
          </div>
          <ul>
            {placeholderData.map((item, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex items-center'>
                  <div className='bg-red-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-red-600' />
                  </div>
                  <p className='pl-4'>{item.assigned}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{item.asset}</p>
                <p className='hidden md:flex'>{item.profile}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
