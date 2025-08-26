import { Outlet } from "react-router-dom";
import LeftsideBar from "../component/global/LeftsideBar";
import NavBar from "../component/global/NavBar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex bg-blue-500 w-screen h-screen gap-3">
      {/* left side */}
      <div className={`${sidebarOpen ? "block" : "hidden"} flex w-[20%]`}>
        <LeftsideBar />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col gap-3">
        {/* navbar side */}
        <NavBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        {/* main  */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
git status