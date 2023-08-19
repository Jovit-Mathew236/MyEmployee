import { useState } from "react";

import { TaskCard } from "../../../Common/Components/Cards";
import CreateProject from "../Components/CreateProjectPopUp/CreateProject";
import styles from "./ProjectManager.module.css";

const ProjectManager = () => {
    const [createPopUp, setCreatePopUp] = useState(false);
    return (
        <>
            <div
                className={styles.create_pop_up}
                style={{ display: createPopUp ? "flex" : "none" }}
            >
                {" "}
                <CreateProject setCreatePopUp={setCreatePopUp}/>
            </div>
            <div
                className={styles.create_btn}
                onClick={() => {
                    setCreatePopUp(!createPopUp);
                }}
            >
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
