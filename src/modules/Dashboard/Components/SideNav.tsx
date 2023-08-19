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
                onClick={() => {
                    window.location.pathname = "/dashboard/my-projects";
                }}
            >
                <i className="fi fi-sr-apps"></i>
            </p>
            <p
                style={
                    window.location.pathname === "/dashboard/project-status"
                        ? {
                              backgroundColor: "#000",
                              color: "#fff"
                          }
                        : {}
                }
                onClick={() => {
                    window.location.pathname = "/dashboard/project-status";
                }}
            >
                <i className="fi fi-sr-bars-progress"></i>
            </p>
            <p
                style={
                    window.location.pathname === "/dashboard/my-teams"
                        ? {
                              backgroundColor: "#000",
                              color: "#fff"
                          }
                        : {}
                }
                onClick={() => {
                    window.location.pathname = "/dashboard/my-teams";
                }}
            >
                <i className="fi fi-br-settings-sliders"></i>
            </p>
        </div>
    );
};

export default SideNav;
