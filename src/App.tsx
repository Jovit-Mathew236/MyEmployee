import "./App.css";
import {
    RouterProvider,
    createBrowserRouter,
    Navigate
} from "react-router-dom";
import Layout from "./modules/Dashboard/Layouts/Layout";
import ProjectManager from "./modules/Dashboard/modules/ProjectManager/ProjectManager";
import CreateProject from "./modules/Dashboard/modules/CreateProject/CreateProject";
import { Login } from "./modules/Dashboard/modules/Login";
import Status from "./modules/Dashboard/modules/Status/Status";
import Teams from "./modules/Dashboard/modules/Teams/Teams";
import Home from "./modules/Home/pages/Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/dashboard",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Navigate to="my-projects" replace />
                },
                {
                    path: "my-projects",
                    element: <ProjectManager />
                },
                {
                    path: "create-project",
                    element: <CreateProject />
                },
                {
                    path: "project-status",
                    element: <Status />
                },
                {
                    path: "my-projects/team",
                    element: <Teams />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
