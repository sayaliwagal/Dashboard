import React from 'react';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md'
import A from '../assets/A.svg';
import Union from '../assets/Union.svg';

const Header = () => {
  return (
    <header className='w-full bg-white shadow-sm'>
      <nav className="mx-auto  h-16 py-6 flex w-full items-center justify-end px-4 lg:px-8">

     <ul className=' flex item-center space-x-6 md:space-x-8'>
        <li className='text-xl flex items-center font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600'>
         
          <FiHelpCircle className='h-6 w-6 text-blue-900 text-8xl'/>
            <span className='px-2 ml-2 hidden sm:block'>
          How It Works
          </span>
          </li>
        <li className='text-xl flex items-center font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600'>
         <span className='w-8 h-8 bg-blue-100 flex items-center justify-center rounded-sm mr-1'>
          <img src={A} alt='A SVG'className='w-4 h-4' />
         </span>
          <span className='w-8 h-8 bg-blue-100 flex items-center justify-center rounded-sm'>
          <img src={Union} alt='A SVG' className='w-4 h-4' />
         </span>
          <span className='px-2 ml-2 hidden sm:block'>
          English 
          </span>
          <FiChevronDown className="ml-1 h-4 w-4 text-gray-500 hidden sm:block" />
          </li>
        <li className='text-xl flex items-center  font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600'>
         
          <FaRegUserCircle className='h-6 w-6 text-blue-900 text-8xl'/>
          <span className='px-2 ml-2 hidden sm:block'>
          My Account
          </span>
          </li>
        <li className='text-xl flex items-center font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600'>
         
          <MdLogout className='h-6 w-6 text-blue-900 text-8xl'/>
          <span className='px-2 ml-2 hidden sm:block'>
          Logout
          </span>
          </li>
      </ul>
      </nav>
    </header>
  )
}

export default Header
