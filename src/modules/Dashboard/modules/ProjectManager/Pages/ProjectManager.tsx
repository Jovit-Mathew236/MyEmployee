// import React from 'react'

import { TaskCard } from "../../../Common/Components/Cards";
import CreateProject from "../Components/CreateProjectPopUp/CreateProject";
import styles from "./ProjectManager.module.css";

const ProjectManager = () => {
    return (
        <>
           <div className={styles.create_pop_up}> <CreateProject /></div>
            <div className={styles.create_btn}>
                <i className="fi fi-br-plus"></i>
            </div>
            <div className="flex justify-center md:justify-start gap-5 flex-wrap">
                <TaskCard
                    onClick={() => {
                        window.location.pathname =
                            "/dashboard/my-projects/team";
                    }}
                />
                <TaskCard
                    onClick={() => {
                        window.location.pathname =
                            "/dashboard/my-projects/team";
                    }}
                />
                <TaskCard
                    onClick={() => {
                        window.location.pathname =
                            "/dashboard/my-projects/team";
                    }}
                />
            </div>
        </>
    );
};

export default ProjectManager;
