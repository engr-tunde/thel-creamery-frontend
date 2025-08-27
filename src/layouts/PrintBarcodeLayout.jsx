import LeftsideBar from "../component/global/LeftsideBar";
import NavBar from "../component/global/NavBar";
import { Outlet } from "react-router-dom";

export const PrintBarcodeLayout = () => {
  return (
    <div className="flex w-screen h-screen gap-3">
      {/* left side */}
      <div className="flex w-[20%]">
        <LeftsideBar />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col gap-3 pr-10">
        {/* navbar side */}
        <NavBar />
        {/* main  */}
        <Outlet />
      </div>
      {/* rgb(228,230,252) */}
    </div>
  );
};
