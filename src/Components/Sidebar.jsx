import React from "react";
import { AiOutlineClose } from "react-icons/ai";
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
  return (
    <div
      className="bg-[#1f1f20] h-full fixed top-0 w-[300px] text-white "
      id="Sidebar"
    >
      <div className="mx-4">
        <div className=" my-10 mx-6">
          <span className="flex items-center">
            <BsCart3 size={25} />
            <p className="text-xl mx-2"> Store</p>
          </span>

          <AiOutlineClose size={30} className="hidden" />
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
