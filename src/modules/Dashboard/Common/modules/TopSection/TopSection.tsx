// import React from "react";
import { Search } from "lucide-react";
import styles from "./TopSection.module.css";
import { Input } from "@/components/ui/input";

const TopSection = () => {
    return (
        <div className={styles.top_section}>
            <div className="flex bg-card-foreground text-card p-3 rounded-md">
                <Search />
                <Input type="text" placeholder="Search" className="bg-transparent !outline-none border-none" />
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
