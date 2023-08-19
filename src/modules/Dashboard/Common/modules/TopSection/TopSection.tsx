// import React from "react";
import styles from "./TopSection.module.css";

const TopSection = () => {
    return (
        <div className={styles.top_section}>
            <div className={styles.search_input}>
                <i className="fi fi-br-search"></i>
                <input type="text" placeholder="Search" />
            </div>

            <div className={styles.list_utils}>
                <div className={styles.sort}>
                    {window.innerWidth > 800 ? (
                        <p>Sort By</p>
                    ) : (
                        <p>
                            <i className="fi fi-br-bars-filter"></i>
                        </p>
                    )}
                    <select>
                        {window.innerWidth > 800 && (
                            <option value="members">No of members</option>
                        )}
                        <option value="name">Name</option>
                        <option value="date">Date</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TopSection;
