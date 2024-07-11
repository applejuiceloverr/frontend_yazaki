import React, { useState } from 'react';
import { FaBox } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Header from '../components/Header';
const placeholderData = [
  {
    serialNumber: 'YAZ123456',
    name: 'Asset 1',
    warranty: '2 Years',
    status: 'Active',
    assetNumber: 'A001',
    purchaseOrder: 'PO123456',
    category: 'Category 1',
    alert: 'No Alerts',
  },
  {
    serialNumber: 'YAZ234567',
    name: 'Asset 2',
    warranty: '3 Years',
    status: 'Inactive',
    assetNumber: 'A002',
    purchaseOrder: 'PO234567',
    category: 'Category 2',
    alert: 'Maintenance Required',
  },
  {
    serialNumber: 'YAZ345678',
    name: 'Asset 3',
    warranty: '1 Year',
    status: 'Active',
    assetNumber: 'A003',
    purchaseOrder: 'PO345678',
    category: 'Category 3',
    alert: 'No Alerts',
  },
];

const Assets = () => {
  const [assets, setAssets] = useState(placeholderData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    const sortedAssets = [...assets].sort((a, b) =>
      a.serialNumber.localeCompare(b.serialNumber)
    );
    setAssets(sortedAssets);
  };

  const filteredAssets = assets.filter((asset) =>
    asset.serialNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-[#9b9ca2] min-h-screen'>
      <Header />

      <div className='p-4'>
        <div className='flex justify-between mb-4'>
          <input
            type='text'
            placeholder='Search by Serial Number'
            className='p-2 rounded-lg border border-gray-300'
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className='bg-red-200 text-black p-2 rounded-lg'
            onClick={handleSort}
          >
            Order Alphabetically
          </button>
        </div>
        <div className='w-full m-auto p-4 border rounded-lg bg-gray-200 overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-8 sm:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>SerialNumber</span>
            <span>Name</span>
            <span className='hidden md:grid'>Warranty</span>
            <span className='hidden md:grid'>Status</span>
            <span className='hidden md:grid'>AssetNumber</span>
            <span className='hidden md:grid'>PurchaseOrder</span>
            <span className='hidden md:grid'>Category</span>
            <span className='hidden sm:grid'>Alert</span>
          </div>
          <ul>
            {filteredAssets.map((asset, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-8 sm:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-red-100 p-3 rounded-lg'>
                    <FaBox className='text-red-600' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {asset.serialNumber}
                    </p>
                    <p className='text-gray-800 text-sm'>{asset.name}</p>
                  </div>
                </div>
                <p className='hidden md:flex'>{asset.warranty}</p>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                      asset.status === 'Active'
                        ? 'bg-green-200 p-2 rounded-lg'
                        : asset.status === 'Inactive'
                        ? 'bg-yellow-200 p-2 rounded-lg'
                        : 'bg-red-200 p-2 rounded-lg'
                    }
                  >
                    {asset.status}
                  </span>
                </p>
                <p className='hidden md:flex'>{asset.assetNumber}</p>
                <p className='hidden md:flex'>{asset.purchaseOrder}</p>
                <p className='hidden md:flex'>{asset.category}</p>
                <p className='hidden sm:flex'>{asset.alert}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Assets;
