import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";
import styles from "./Layout.module.css";
import { BounceLoader } from "react-spinners";
import TopSection from "../Common/modules/TopSection/TopSection";

const Layout = () => {
    return (
        <div>
            <SideNav />
            <div>
                <TopNav />
                <div className={styles.outlet}>
                    <Suspense fallback={<BounceLoader color="#36d7b7" />}>
                        <TopSection />
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Layout;
