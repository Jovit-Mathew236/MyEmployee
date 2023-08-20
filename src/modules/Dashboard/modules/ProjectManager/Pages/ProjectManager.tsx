import { TaskCard } from "../../../Common/Components/Cards";
import CreateProject from "../Components/CreateProjectPopUp/CreateProject";
import styles from "./ProjectManager.module.css";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";

const ProjectManager = () => {
    return (
        <>  
        <div className={styles.create_btn}>
                <Dialog>
                    <DialogTrigger className="w-full h-full flex justify-center items-center"> <PlusIcon/></DialogTrigger>
                    <CreateProject departmentId="1234567" />
                </Dialog>
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
