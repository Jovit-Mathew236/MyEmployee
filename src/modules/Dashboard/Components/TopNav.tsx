// import React from 'react'
import styles from "./Layout.module.css";

const TopNav = () => {
  const title = window.location.pathname.split("/")[2] || "";
  return (
    <div className={styles.top_navbar}>
      <div>{title}</div>
      <div className={styles.menu}>
        <p>All</p>
        <p>Active</p>
        <p>Unassigned</p>
      </div>
      <div className={styles.profile_details}>
        <i className="fi fi-sr-eclipse-alt"></i>
        <p>Arthur</p>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
