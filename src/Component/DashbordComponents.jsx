import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import UserScore from './UserScore';


const DashbordComponents = () => {
  return (
    <div className="flex justify-center my-4 mx-auto max-w-full h-fit box-border overflow-x-hidden">
  <UserScore /> 
    </div>
  )
}

export default DashbordComponents
