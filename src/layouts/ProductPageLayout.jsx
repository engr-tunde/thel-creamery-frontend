import { Outlet } from "react-router-dom";
import LeftsideBar from "../Component/global/LeftsideBar";
import NavBar from "../Component/global/NavBar";

export const ProductPageLayout = () => {
  return (
    <div className="flex w-screen h-screen gap-3">
      {/* left side */}
      <div className="flex w-[20%]">
        <LeftsideBar />
      </div>
      {/* right side */}
      <div className="w-full flex flex-col gap-3">
        {/* navbar side */}
        <NavBar />
        {/* main  */}
        <Outlet />
      </div>
    </div>
  );
};
