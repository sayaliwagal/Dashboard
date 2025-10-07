import React from 'react';
import Header from '../Component/Header';
import SideBar from '../Component/SideBar';
import DashbordComponents from '../Component/DashbordComponents';
import Footer from '../Component/Footer';

const Dashbord = () => {
  return (
      <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Section (Sidebar + Dashboard Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (fixed width) */}
        <SideBar />

        {/* Dashboard Content Area (centered) */}
        <div className="flex justify-center mx-auto items-center p-6">
          <DashbordComponents />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Dashbord
