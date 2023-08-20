import {
    Navigate,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import "./App.css";
import Layout from "./modules/Dashboard/Layouts/Layout";
import Login from "./modules/Dashboard/modules/Login";
import ProjectManager from "./modules/Dashboard/modules/ProjectManager/Pages/ProjectManager";
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
                    path: "project-status",
                    element: <Status />
                },
                {
                    path: "teams",
                    element: <Teams />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
