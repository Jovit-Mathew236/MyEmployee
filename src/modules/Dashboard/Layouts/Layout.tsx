// import React from 'react'
import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";

const Layout = () => {
  return (
    <div>
      <SideNav />
      <div>
        <TopNav />
        <div>
          {/* <Suspense fallback={<MuLoader />}> */}
          <Outlet />
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
