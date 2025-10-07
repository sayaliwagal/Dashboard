import React from "react";
import PieChartsWithNeedle from "./Charts/PieChartsWithNeedle";
import piefile from "../../public/piefile.png";
import piepic from "../../public/piepic.png"
import { IoEyeOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import file from "../assets/icons.svg"

const UserScore = () => {
  return (
    <div className="flex justify-around max-w-full gap-7  h-fit bg-gray-300 [box-shadow:0_-4px_8px_rgba(1,90,0,0.1)]">
      <div className=" bg-white rounded-xl h-1/2 shadow-xl p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-center">Hello, Rahul L.</h1>
        <PieChartsWithNeedle
          value={767}
          chartData={[
            { name: "A", value: 60, color: "#e15825" },
            { name: "B", value: 10, color: "#f18200" },
            { name: "C", value: 10, color: "#fcd800" },
            { name: "D", value: 10, color: "#a9d161" },
            { name: "E", value: 10, color: "#009900" },
          ]}
          needleColor="#000"
        />
        <div className="relative flex justify-between">
          <span className="text-gray-400 text-center mx-6 top-0">300</span>
          <span className="text-gray-400 text-center mx-6 top-0">900</span>
        </div>
        <p className="text-lg  text-center text-gray-900 my-3">
          is your NB Score as of 19th Apr `22
        </p>
        <div className=" w-full px-4 bg-white flex justify-between items-center [box-shadow:0_-4px_8px_rgba(1,90,0,0.1)]">
          <a
            href="#"
            className="text-blue-500 text-xl text-center font-semibold underline "
          >
            Score Analysis
          </a>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 mt-4 rounded-full">
            Refresh Now
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
      <div className="bg-white w-full h-1/2 p-3 flex rounded-xl shadow-xl">
        <div className="p-4">
          <h3 className=" text-2xl text-blue-600 m-2 font-semibold">NB REPORT</h3>

          <p className="text-xl text-grey-500 m-2">
            Get your Personalized NB Report to plan your financial future.
          </p>
          <a href="#" className="flex text-center items-center gap-3 p-2">
            <IoEyeOutline size={24}/>
            <span className="flex text-center items-center text-blue-500 underline text-lg font-semibold">View Your NB Report <FaAngleRight size={20} /></span>
          </a>
          <a href="#" className="flex text-center items-center gap-3 p-2">
            <img src={file} alt='A SVG'className='w-5 h-5' />
            <span className="flex text-center items-center text-blue-500 underline text-lg font-semibold">Download Your NB Report with Summary 
                <FaAngleRight size={20} /></span>

          </a>
        </div>
        <div className="p-2 m-2">
          <img src={piefile} alt="pieFile" />
        </div>
      </div>
      <div className="bg-[#feef93] w-full h-1/2 p-3 flex rounded-xl shadow-xl">
         <p className=" text-xl m-3 p-3"> You currently have an active subscription. You will be able to access Free Annual NB Score & Report after the subscription period expires.</p>
         <img src={piepic} alt="" className="w-64 h-64 " />
      </div>
      </div>
    </div>
  );
};

export default UserScore;
