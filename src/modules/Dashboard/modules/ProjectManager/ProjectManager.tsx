// import React from 'react'

import { TaskCard } from "../../Common/Components/Cards";

const ProjectManager = () => {
    return (
        <div className="flex justify-start gap-5">
            <TaskCard onClick={()=>{
                window.location.pathname = "/dashboard/my-projects/team"
            }}/>
            {/* <TaskCard /> */}
            {/* <TaskCard /> */}
        </div>
    );
};

export default ProjectManager;
