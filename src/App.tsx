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

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/login" replace />
        },
        {
            path: "/login",
            element: <Login/>
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
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
