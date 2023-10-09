import React, { useState } from "react";

import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

const Sidebar = () => {
  const [sidebar, closeSidebar] = useState(false);
  const handleSidebar = () => {
    closeSidebar(!sidebar);
  };
  return (
    <div className=" left-0 top-0 w-[300px] h-full bg-[#1f1f20]  text-white fixed ">
      <div className="mx-4">
        <div className=" my-10 mx-6">
          <span className="flex items-center">
            <BsCart3 size={25} />
            <p className="text-xl mx-2"> Store</p>
          </span>
        </div>
        <div>
          <ul className="">
            <li className="py-4 ">
              <a className="flex" href="/">
                <BsGrid1X2Fill size={20} className="mx-2" /> Dashbosard
              </a>
            </li>
            <li className="py-4">
              <a className="flex" href="/">
                <BsFillArchiveFill size={20} className="mx-2" /> Products
              </a>
            </li>
            <li className="py-4">
              <a className="flex" href="/">
                <BsGrid3X3GapFill size={20} className="mx-2" /> Categories
              </a>
            </li>
            <li className="py-4">
              <a className="flex" href="/">
                <BsPeopleFill size={20} className="mx-2" /> Customers
              </a>
            </li>
            <li className="py-4">
              <a className="flex" href="/">
                <BsListCheck size={20} className="mx-2" /> Inventory
              </a>
            </li>
            <li className="py-4">
              <a className="flex" href="/">
                <BsMenuButtonWideFill size={20} className="mx-2" /> Reports
              </a>
            </li>
            <li className="py-4">
              <a className="flex" href="/">
                <BsFillGearFill size={20} className="mx-2" /> Setting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
