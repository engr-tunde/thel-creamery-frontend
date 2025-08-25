import { Link } from "react-router-dom";
import { sidebarData } from "../../utility/dataArr";
import * as FaIcons from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const LeftsideBar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white p-3 overflow-y-auto">
      <img src="/images/logo-plain.png" alt="" className="w-28" />
      <div className="w-full flex flex-col gap- mt-0">
        <div>
          {sidebarData?.map((item, index) => {
            const IconComponent = FaIcons[item.icon];
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                <div
                  className="flex items-center justify-between hover:text-purple-600"
                  onClick={() =>
                    hasChildren && setOpenIndex(isOpen ? null : index)
                  }
                >
                  <Link
                    to={item?.link}
                    className="flex items-center gap-4 my-3 "
                    tabIndex={-1}
                    onClick={(e) => hasChildren && e.preventDefault()}
                  >
                    <span className="text-purple-600">
                      {IconComponent ? <IconComponent /> : null}
                    </span>
                    <span className="">{item?.title}</span>
                  </Link>
                  {hasChildren && (
                    <div className="ml-2 p-1 hover:text-purple-600 ">
                      {isOpen ? (
                        <MdKeyboardArrowDown />
                      ) : (
                        <MdKeyboardArrowLeft />
                      )}
                    </div>
                  )}
                </div>
                {hasChildren && isOpen && (
                  <ul className="px-3 mx-3 mt-2 flex flex-col gap-2 bg-gray-200 w-[85%] rounded-md">
                    {item.children.map((child, childidx) => (
                      <li key={childidx}>
                        <Link
                          to={child.link}
                          className="text-[14px] text-gray-600 hover:text-purple-600 transition-all duration-50  hover:pl-4"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftsideBar;
