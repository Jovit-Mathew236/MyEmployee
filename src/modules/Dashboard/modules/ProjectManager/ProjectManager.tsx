// import React from 'react'

import { TaskCard } from "../../Common/Components/Cards";

const ProjectManager = () => {
    return (
        <div className="flex justify-center md:justify-start gap-5 flex-wrap">
            <TaskCard
                onClick={() => {
                    window.location.pathname = "/dashboard/my-projects/team";
                }}
            />
            <TaskCard
                onClick={() => {
                    window.location.pathname = "/dashboard/my-projects/team";
                }}
            />
            <TaskCard
                onClick={() => {
                    window.location.pathname = "/dashboard/my-projects/team";
                }}
            />
        </div>
    );
};

export default ProjectManager;
