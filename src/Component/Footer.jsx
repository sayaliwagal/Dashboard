import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-3 mx-8 [box-shadow:0_-4px_8px_rgba(1,90,0,0.1)] ">
      <div className="flex flex-col justify-center items-center text-sm text-gray-800 mx-auto">
        <h4 className="text-center text-xl my-2">
          &copy; Copyright 2025 NetBramha Studio LLP. All Rights Reserved.
        </h4>
        <ul className="flex gap-7 text-center items-center text-xl">
          <li className="underline">FAQs</li>
          <li className="underline">Terms and Conditions</li>
          <li className="underline">Privacy Policy</li>
          <li className="underline">Raise a Dispute</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
