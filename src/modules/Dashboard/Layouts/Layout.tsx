// import React from 'react'
import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div>
      <SideNav />
      <div>
        <TopNav />
        <div className={styles.outlet}>
          {/* <Suspense fallback={<MuLoader />}> */}
          <Outlet />
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
