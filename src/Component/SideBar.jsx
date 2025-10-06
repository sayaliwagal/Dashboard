import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { FaChevronDown, FaRegFileAlt } from "react-icons/fa";
import { BiTachometer } from "react-icons/bi";
import { HiUpload } from "react-icons/hi";
import { MdCardGiftcard } from "react-icons/md";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState("overview");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <div className=" absolute top-0 w-64 min-h-screen bg-[var(--color-side-bg)] text-white p-5 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <div className="bg-yellow-400 w-4 h-4 mr-2"></div>
        <h1 className="font-semibold text-lg tracking-wide">NETBRAMHA</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 flex-1">
        {/* Overview Section */}
        <div>
          <button
            onClick={() => toggleMenu("overview")}
            className="flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-[--color-side-dropdown] transition-colors"
          >
            <span className="flex items-center gap-3">
              <GoHome size={20} />
              <span className="text-base">Overview</span>
            </span>
            <FaChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                openMenu === "overview" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openMenu === "overview" && (
            <div className="relative bg-[--color-side-dropdown] mt-1 rounded-md pb-3 pt-2">
              {/* Vertical Line */}
              <div className="absolute left-6 top-3 bottom-3 border-l border-white/40"></div>

              <div className="ml-9 text-sm space-y-2">
                <p className="hover:text-gray-100 cursor-pointer">
                  Score & Report
                </p>
                <p className="font-semibold cursor-pointer">Summary</p>
                <p className="hover:text-gray-100 cursor-pointer">History</p>
                <p className="hover:text-gray-100 cursor-pointer">
                  Where You Stand
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Your Report */}
        <button className="flex items-center w-full py-2 px-3 gap-3 rounded-md hover:bg-[--color-side-dropdown] transition-colors">
          <FaRegFileAlt size={20} />
          <span>Your Report</span>
        </button>

        {/* Simulator */}
        <button className="flex items-center w-full py-2 px-3 gap-3 rounded-md hover:bg-[--color-side-dropdown] transition-colors">
          <BiTachometer size={20} />
          <span>Simulator</span>
        </button>

        {/* Upgrade My Plan */}
        <button className="flex items-center w-full py-2 px-3 gap-3 rounded-md hover:bg-[--color-side-dropdown] transition-colors">
          <HiUpload size={20} />
          <span>Upgrade My Plan</span>
        </button>

        {/* Rewards Program */}
        <button className="flex items-center w-full py-2 px-3 gap-3 rounded-md hover:bg-[--color-side-dropdown] transition-colors">
          <MdCardGiftcard size={20} />
          <span>Rewards Program</span>
        </button>
      </nav>
    </div>
  );
};

export default SideBar;
