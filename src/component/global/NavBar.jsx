import { FaBars, FaLightbulb, FaPlus, FaPlusSquare } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { SiWagmi } from "react-icons/si";
import { Link } from "react-router-dom";
import { plusMenu } from "../../utility/dataArr";
import { useState } from "react";

const NavBar = ({ onToggleSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex p-2 justify-between items-center ">
      <div>
        <FaBars
          className="text-4xl p-2 border-[1px] border-purple-600 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white"
          onClick={onToggleSidebar}
        />
      </div>

      <div className="plus flex items-center gap-3">
        <div
          className="text-[14px] py-1 px-2 border-[1px] border-purple-600 rounded-md text-purple-600 bg-white hover:bg-purple-600 hover:text-white"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <span>+</span>
        </div>
        {showDropdown && (
          <ul className="absolute top-12 right-10 bg-white shadow-md rounded-md  w-40 py-2 shadow-white">
            {plusMenu?.map((plusItem, plusIndx) => (
              <li key={plusIndx}>
                <Link
                  to={plusItem.link}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-700 text-[14px]"
                  onClick={() => setShowDropdown(false)}
                >
                  {plusItem.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-center text-[14px] text-center items-center gap-2 py-1 px-2 border-[1px] border-purple-600 rounded-md text-purple-600 bg-white hover:bg-purple-600 hover:text-white">
          <FaCartFlatbed />
          <span>POS</span>
        </div>
        <FaLightbulb />
        <SiWagmi className="text-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
