// import React from 'react'
import styles from "./Layout.module.css";

const SideNav = () => {
    return (
        <div className={styles.sidebar}>
            <p
                style={
                    window.location.pathname === "/dashboard/my-projects"
                        ? {
                              backgroundColor: "#000",
                              color: "#fff"
                          }
                        : {}
                }
            >
                <i className="fi fi-sr-apps"></i>
            </p>
            <p>
                <i className="fi fi-sr-bars-progress"></i>
            </p>
            <p>
                <i className="fi fi-br-settings-sliders"></i>
            </p>
        </div>
    );
};

export default SideNav;
