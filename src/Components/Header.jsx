import React from "react";

import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsSearch,
  BsPerson,
} from "react-icons/bs";

const Header = () => {
  return (
    <header className="">
      <div>
        <div className="bg-white  ml-[300px] ">
          <div className=" text-black mx-4">
            <div className="flex justify-between h-14 items-center border-[#211e1e] border-b-4">
              <div className="mx-4">
                <BsSearch size={20} />
              </div>
              <div className="flex mx-4">
                <BsFillBellFill size={20} className="mx-1" />
                <BsFillEnvelopeFill size={20} className="mx-1" />
                <BsPerson size={20} className="mx-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
