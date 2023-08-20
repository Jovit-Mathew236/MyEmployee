import { TaskCard } from "../../../Common/Components/Cards";
import CreateProject from "../Components/CreateProjectPopUp/CreateProject";
import styles from "./ProjectManager.module.css";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Loader2, PlusIcon } from "lucide-react";
import useSWR from 'swr'
import { fetcher } from "@/lib/fetcher";
import { api } from "@/lib/api";
import Loading from "@/modules/Dashboard/Layouts/Components/loading";
import image from "@/assets/404.svg"

const ProjectManager = () => {
    const { data, error, isLoading } = useSWR(api.project.get, fetcher) as SWR<Project[]>

    if (error) return <Loading children={<img src={image} className="w-60"/>} />
    if (isLoading) return <Loading children={<Loader2 className="animate-spin" />} />

    const { response } = data
    return (
        <>  
        <div className={styles.create_btn}>
            <Dialog>
                <DialogTrigger className="w-full h-full flex justify-center items-center"> <PlusIcon/></DialogTrigger>
                <CreateProject departmentId="1234567" />
            </Dialog>
        </div>
        <div className="flex justify-center md:justify-start gap-5 flex-wrap">
            {response.map((d, i) => <TaskCard data={d} key={i} onClick={() => { window.location.pathname = "/dashboard/my-projects/team"; }} />)}
        </div>
        </>
    );
};

export default ProjectManager;
