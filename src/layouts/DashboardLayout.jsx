import { Outlet } from "react-router-dom";
import LeftsideBar from "@/component/global/LeftsideBar";
import { useState } from "react";
import NavBar from "@/component/global/NavBar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex w-screen h-screen gap-3">
      {/* left side */}
      <div className={`${sidebarOpen ? "block" : "hidden"} flex w-[20%]`}>
        <LeftsideBar />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col gap-1">
        {/* navbar side */}
        <NavBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        {/* main  */}
        <div className=" p-3 lg:p-5 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
